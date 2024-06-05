import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar.js'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width initial-scale=1" />
        <title>Nyako.one</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link>
        <meta name="twitter:title" content="Nyako" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:site" content="@nyakonii" />
        <meta name="twitter:creator" content="@nyakonii" /> */}
        <meta name="twitter:image" content="/images/Logo.png" />
        <meta property="og:site_name" content="Nyako.One" />
        <meta name="og:title" content="Nyako" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/Logo.png" />
        <meta
          property="og:description"
          content="This is the Portfolio Site for Nyako/Cadence"
        />
        <meta name="theme-color" content="#A020F0"></meta>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxWidth="container.md" pt={20}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
