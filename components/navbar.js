import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Text
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha')
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#A020F0' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxWidth="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="sm" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/projects" path={path}>
            <Text fontFamily="monospace" fontSize="16px">Projects</Text>
          </LinkItem>
          <LinkItem href="/commission" path={path}>
            <Text fontFamily="monospace" fontSize="16px">Commissions</Text>
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              ></MenuButton>
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <NextLink href="/commission" passHref>
                  <MenuItem as={Link}>Commissions</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
