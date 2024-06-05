import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/projects" passHref>
      <Link>Go Back</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronLeftIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={18} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="white" mr={2}>
    {children}
  </Badge>
)
