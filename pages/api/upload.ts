import { File as FormidableFile, IncomingForm } from "formidable";
import { NextApiResponse } from "next";
import { CRequest } from "../../@types/requests-methods";
import createSession from "../../src/hooks/createSession";
import { BlobStorage } from "../../src/utils/saveToAzureBlobStorage";

const handler = async (req: CRequest, res: NextApiResponse): Promise<any> => {
  return new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, async (err, fields, files) => {
      try {
        const file = files.file as FormidableFile;
        const storage = new BlobStorage(
          process.env.CONNECTION_BLOB_STORAGE!,
          "gameanderson"
        );
        const url = await storage.upload(file);
        resolve(
          res.json({
            url,
          })
        );
      } catch (err) {
        reject(err);
      }
    });
  });
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default createSession(handler);
