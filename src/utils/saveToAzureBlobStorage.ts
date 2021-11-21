import { BlobServiceClient, ContainerClient } from '@azure/storage-blob'
import { File } from 'formidable'
import { readFileSync } from 'fs'

interface IStorage {
  upload(file: File): Promise<string>
}

export class BlobStorage implements IStorage {
  private connectionString: string
  private container: string

  constructor(connectionString: string, container: string) {
    this.connectionString = connectionString
    this.container = container
  }

  async upload(file: File): Promise<string> {
    if (!file) return ''

    // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
    const blobService = BlobServiceClient.fromConnectionString(
      this.connectionString
    )

    // get Container - full public read access
    const containerClient: ContainerClient = blobService.getContainerClient(
      this.container
    )
    await containerClient.createIfNotExists({
      access: 'container',
    })

    // upload file
    return this.createBlobInContainer(containerClient, file)
  }

  private async createBlobInContainer(
    containerClient: ContainerClient,
    file: File
  ): Promise<string> {
    const blobClient = containerClient.getBlockBlobClient(file.name!)
    const options = {
      blobHTTPHeaders: {
        blobContentType: file.type ?? 'application/octet-stream',
      },
    }
    const fileBuffer = readFileSync(file.path)
    await blobClient.uploadData(fileBuffer, options)
    return blobClient.url
  }

  streamToBlob(stream: NodeJS.ReadableStream, mimeType: string): Promise<Blob> {
    if (mimeType != null && typeof mimeType !== 'string') {
      throw new Error('Invalid mimetype, expected string.')
    }
    return new Promise((resolve, reject) => {
      const chunks: any[] = []
      stream
        .on('data', (chunk: any) => chunks.push(chunk))
        .once('end', () => {
          const blob =
            mimeType != null
              ? new Blob(chunks, { type: mimeType })
              : new Blob(chunks)
          resolve(blob)
        })
        .once('error', reject)
    })
  }
}
