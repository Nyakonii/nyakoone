import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading fontFamily="monospace" as="h1">
        404 Not Found
      </Heading>
      <Text fontFamily="monospace" fontSize="14px">
        The page you&apos;re looking for was not found.
      </Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button
            fontFamily="monospace"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            _hover={{
              bgGradient: 'linear(to-r, green.500, blue.500)'
            }}
          >
            Return to home
          </Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
