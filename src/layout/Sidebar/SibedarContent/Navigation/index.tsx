import React, { ReactNode, useState, useEffect, useMemo } from 'react'
import {
  HStack,
  Link,
  Stack,
  StackProps,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import useUser from '../../../../hooks/useUser'
import { navigationItems,  } from '../../../../routes'

const NavigationLink = ({
  href,
  children,
}: {
  href: string
  children: ReactNode
  asPath: string
}) => {
  const router = useRouter()
  const isActive = href === router.pathname

  const activeBg = useColorModeValue('orange.300', 'orange.400')

  return (
    <Link
      onClick={() => router.push(href)}
      fontSize={'sm'}
      rounded={'md'}
      px={3}
      py={2}
      ml={'-12px!important'}
      bg={isActive ? activeBg : undefined}
      fontWeight={isActive ? 600 : 400}
      color={
        isActive
          ? useColorModeValue('white', 'white')
          : useColorModeValue('gray.700', 'gray.300')
      }
      _hover={{
        bg: isActive ? activeBg : useColorModeValue('gray.100', 'gray.900'),
      }}
    >
      {children}
    </Link>
  )
}

const Navigation = (props: StackProps) => {
  const { asPath } = useRouter()
  const categoryColor = useColorModeValue('green.800', 'green.200')

  const { user } = useUser({ redirectTo: '/login' })


  return (
    <Stack as="nav" maxW={{ md: '3xs' }} w={'full'} flexShrink={0} {...props}>
      {navigationItems.map((item) => (
        <div key={`item-to-${item.topic}`}>
          <Text
            my={2}
            fontSize="md"
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            {item.topic}
          </Text>

          {item.children.map((itemChildren) => (
            <Stack
              color={categoryColor}
              spacing={-1.5}
              key={`item-to-${itemChildren.href}-${itemChildren.title}`}
            >
              <NavigationLink
                asPath={asPath}
                key={`item-to-${itemChildren.href}`}
                href={`${itemChildren.href}`}
              >
                <HStack ml={3} paddingBlock={2}>
                  {itemChildren.icon}
                  <Text marginLeft={6}>{itemChildren.title}</Text>
                </HStack>
              </NavigationLink>
            </Stack>
          ))}
        </div>
      ))}
    </Stack>
  )
}

export default Navigation
