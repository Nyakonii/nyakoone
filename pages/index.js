import {
  Container,
  Box,
  Heading,
  Image,
  Progress,
  Text,
  List,
  ListItem,
  Link,
  Icon,
  Button,
  useToast,
  Divider,
  Avatar,
  UnorderedList
} from '@chakra-ui/react'
import { SectionX } from '../components/section'
import Paragraph from '../components/paragraph'
import { IoLogoDiscord, IoLogoGithub } from 'react-icons/io5'
import { SiRoblox } from 'react-icons/si'
import { BiBookAlt } from 'react-icons/bi'
import { useState, useEffect } from 'react'
import Typewriter from 'typewriter-effect'
require('dotenv').config()

const Page = () => {
  const toast = useToast()

  const activities = ['CatboyNyako', ' Nyakonii', ' Cadence']

  return (
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1} align="center">
          <Divider my={6} />
          <Heading
            as="h1"
            variant="page-title"
            fontFamily="monospace"
            bgClip="text"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
          >
            Cadence/Nyako
          </Heading>
          <Typewriter
            onInit={typewriter => {
              setInterval(() => {
                const randomIndex = Math.floor(
                  Math.random() * (activities.length - 1) + 1
                )
                const funact = activities[randomIndex]
                typewriter
                  .typeString('Aliases: ' + activities)
                  .pauseFor(10000)
                  .deleteAll()
                  .start()
              }, 1000)
            }}
          />
          <p>Full Stack Developer </p>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          {/* <Image
            borderColor="purple"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            maxHeight="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/65.png"
            alt="Profileimg"
            marginTop="10"
          /> */}
          <Avatar size="2xl" name="Nyako" src="/images/66.png" mt={10} />
        </Box>
      </Box>
      <Divider my={6} />
      <SectionX delay={0.1} amount={-50}>
        <Heading
          as="h3"
          variant="section-title"
          bgGradient="linear(to-l, #A020F0,#A020F0)"
          bgClip="text"
        >
          About Me
        </Heading>
        <Text fontFamily="monospace" fontSize="14px">
          Hi I am Cadence but you can call me Nyako. I started programming back
          in February of 2021 I have learned alot since then. I currently am the
          Head Developer for Ḉontinental Army, My work for the group involves
          Database Management, Server Maintenance and Managing the development
          staff I also handle most of the programming for the group. I have made
          numerous bots for Discord I can make API&apos;s that connect Discord
          to and from Roblox. I strive to finish every project with my best
          work.
        </Text>
      </SectionX>

      <SectionX delay={0.2} amount={50}>
        <Heading
          as="h3"
          variant="section-title"
          bgGradient="linear(to-l, #FF0080,#FF0080)"
          bgClip="text"
        >
          Skills
        </Heading>
        <Text fontFamily="monospace" fontSize="14px">
          I am able to create most things and if I&apos;m not able to I will
          research until I can. I love to perfect my work if something
          doesn&apos;t work right I won&apos;t give up until I get it working.
          <br />
          <br />I can make:
          <UnorderedList>
            <ListItem>Discord bots</ListItem>
            <ListItem>Websites</ListItem>
            <ListItem>Roblox Scripts</ListItem>
            <ListItem>API&apos;s For Roblox Or Discord Or Both</ListItem>
          </UnorderedList>
          <br />
          If you would like more info on my commissions click here
          <Link href="/commission">
            <Button
              variant="ghost"
              colorScheme="purple"
              leftIcon={<BiBookAlt />}
            >
              Commissions
            </Button>
          </Link>
        </Text>
        <br />
        <Text textColor="lightpink">Javascript</Text>
        <Progress value={80} size="md" colorScheme="pink" />
        <Text textColor="lightblue">Lua</Text>
        <Progress value={70} size="md" colorScheme="blue" />
      </SectionX>

      <SectionX delay={0.3} amount={-50}>
        <Heading
          as="h3"
          variant="section-title"
          bgGradient="linear(to-l, #A020F0,#A020F0)"
          bgClip="text"
        >
          Ways To Contact Me
        </Heading>
        <List>
          <ListItem>
            <Button
              variant="ghost"
              colorScheme="purple"
              leftIcon={<IoLogoDiscord />}
              onClick={() => {
                navigator.clipboard.writeText('Nyako#0001')
                toast({
                  title: 'Copied',
                  description: 'Tag Copied To Clipboard',
                  status: 'success',
                  duration: 2000,
                  isClosable: true
                })
              }}
            >
              Nyako#0001
            </Button>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/Nyakonii" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoGithub />}
              >
                @Nyakonii
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.roblox.com/users/337146660/profile"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<SiRoblox />}
              >
                CatboyNyako
              </Button>
            </Link>
          </ListItem>
        </List>
      </SectionX>
    </Container>
  )
}

export default Page
