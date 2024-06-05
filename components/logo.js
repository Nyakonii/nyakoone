import Link from 'next/link'
import { Text, Image } from '@chakra-ui/react'

import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline;
  height: 30px;
  line-height: 20px;
  padding: 10px;

`

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Text
            color="purple.300"
            fontFamily="monospace"
            fontWeight="bold"
            fontSize="20"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            ml={3}
          >
            Nyako
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
