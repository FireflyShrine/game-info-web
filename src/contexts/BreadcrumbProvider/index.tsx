import React, { createContext, useCallback, useContext, useState } from 'react'
import { BreadcrumbContextType, BreadcrumbItem as BreadcrumbI } from './types'
import { BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const BreadcrumbContext = createContext<BreadcrumbContextType>({
  breadcrumbs: [],
  changeBreadcrumbs: () => {
    console.log('não implementado')
  },
})

export const useBreadcrumb = () => {
  const context = useContext(BreadcrumbContext)
  return context
}

export default function BreadcrumbProvider({ children }: any) {
  const router = useRouter()

  const [breadcrumbs, setBreadcrumbs] = useState<React.ReactNode[]>([
    <BreadcrumbItem key={`route-inicio-${Date.now()}`}>
      <BreadcrumbLink isCurrentPage>Home</BreadcrumbLink>
    </BreadcrumbItem>,
  ])

  const changeBreadcrumbs = useCallback(
    (breadcrumbItems: BreadcrumbI[]) => {
      const elements = breadcrumbItems.map((x, index) => (
        <BreadcrumbItem key={`route-${x.href}-${index}`}>
          {!x.href && <BreadcrumbLink isCurrentPage>{x.title}</BreadcrumbLink>}
          {x.href && (
            <BreadcrumbLink onClick={() => router.push(x.href ?? '')}>
              {x.title}
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
      ))
      setBreadcrumbs(elements)
    },
    [breadcrumbs, setBreadcrumbs]
  )

  return (
    <BreadcrumbContext.Provider value={{ breadcrumbs, changeBreadcrumbs }}>
      {children}
    </BreadcrumbContext.Provider>
  )
}
