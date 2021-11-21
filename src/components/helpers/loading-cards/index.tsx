import { Skeleton, SkeletonProps } from '@chakra-ui/react'
import React from 'react'

interface LoadingCardsProps extends SkeletonProps {
  isLoading: boolean
  qtd?: number
}

const LoadingCards = ({ isLoading, qtd, ...rest }: LoadingCardsProps) => {
  return (
    <>
      {Array.from(new Array(qtd ?? 3)).map((_, index) => (
        <React.Fragment key={`skeleton-item-${index}`}>
          {isLoading && <Skeleton height={rest.height ?? '40px'} {...rest} />}
        </React.Fragment>
      ))}
    </>
  )
}

export default LoadingCards
