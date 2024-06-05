import { Container, Heading, SimpleGrid, Divider, Box, Button, Text, List, ListItem, ListIcon, Skeleton } from "@chakra-ui/react"
import NextLink from 'next/link'
import{ SectionX, SectionY } from '../components/section'
import { IoShieldCheckmarkOutline} from 'react-icons/io5'
import { BsCheckLg } from 'react-icons/bs'


const commission = () => {
    return (
        <Container>
            <Heading
            as="h1"
            fontSize={45}
            mb={4}
            bgClip="text"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            >
            Commissions
            </Heading>
            <Divider my={6} />

            <SimpleGrid columns={[1, 1, 3]} gap={3}>
            <SectionY amount={15}>
            <Skeleton height="100px" isLoaded>
            <Text fontFamily="monospace" fontSize={16}>No Commissions Yet</Text>
            </Skeleton>
            </SectionY>
            <SectionY amount={-15}>
            <Skeleton height="100px" isLoaded>
            </Skeleton>
            </SectionY>
            <SectionY amount={15}>
            <Skeleton height="100px" isLoaded>
            </Skeleton>
            </SectionY>
            </SimpleGrid>
            <Divider my={6} />
            <Box my={6} align="center">
        <Heading
            as="h1"
            fontSize={22}
            mb={4}
            bgClip="text"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            >
            Things I will do for you
            </Heading>
            <SectionY amount={-15} delay={0.5}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={BsCheckLg} color='purple.500' />
                If I fail to complete your project I refund your deposit
              </ListItem>
              <ListItem>
                <ListIcon as={BsCheckLg} color='pink.500' />
                After your game releases I will help with any bug fixes for 6 months after release (with the script or bot I made)
              </ListItem>
              <ListItem>
                <ListIcon as={BsCheckLg} color='purple.500' />
                If I dont know if I can complete your project I will work on it for free and only ask for payment if I succeed
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon as={BsCheckLg} color='pink.500' />
                I am a very open person I don&apos;t charge extra if you want something changed
              </ListItem>
            </List>
            </SectionY>
            <Divider my={6} />
        <SectionY amount={15} delay={1}>     
        <NextLink href="/commission/form" passHref>
          <Button
            fontFamily="monospace"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            _hover={{
              bgGradient: 'linear(to-r, green.500, blue.500)'
            }}
          >
            Commisson Form
          </Button>
        </NextLink>
        </SectionY> 
      </Box>
        </Container>
    )
}

export default commission