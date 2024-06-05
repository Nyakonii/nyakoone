import {
    Container,
    Box,
    Heading,
    Image,
    Progress,
    Text,
    Divider,
    UnorderedList,
    ListItem,
    Link,
    Button,
    List
  } from '@chakra-ui/react'
import { SectionX } from '../components/section'
import Paragraph from '../components/paragraph'
import { BiBookAlt } from 'react-icons/bi'
import { SiCashapp, SiRoblox } from 'react-icons/si'

const TOS = () => {
    return (
    <Container>
        <br/>
        <Heading
        mt="2"
        as="h1"
        fontSize={45}
        mb={4}
        bgClip="text"
        bgGradient="linear(to-l, #7928CA,#FF0080)"
      >
        My Terms
      </Heading>
      <Divider my={6} />
      <SectionX delay={0.1} amount="15">
      <Heading
          as="h3"
          bgGradient="linear(to-l, #A020F0,#A020F0)"
          bgClip="text"
          variant="section-title"
        >
          Hiring Terms
        </Heading>
        
        <Text>
        I will need to know in detail exactly what you want I don&apos;t want to waste your time or my own making something that doesnt satisfy you. <br/> If you want to see more of my work you may dm me: Nyako#0001 <br/> <br/>
        <UnorderedList>
          <ListItem>I require assets like GUI&apos;s, Models, ect to be made and ready otherwise I will wait until they are to complete the project</ListItem>
          <ListItem>If I am gonna need to work with someone else please add them to a group chat with me</ListItem>
          <ListItem>Don&apos;t be mean or try to rush me I will let you know way before hand if I will be done by the deadline</ListItem>
          <ListItem>I won&apos;t refund you if you try bending my agreement</ListItem>
          <ListItem>I dont provide hosting for bots but if you need help setting up your bot I will help you</ListItem>
          <ListItem>If any other project terms apply then we will talk them over before I accept your project</ListItem>
          </UnorderedList>
          <br/>
          Please Provide As Much Information You Can In Your Request
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
      </SectionX>
      <SectionX delay={0.1} amount="-15">
      <Heading
          as="h3"
          bgGradient="linear(to-l, #FF0080,#FF0080)"
          bgClip="text"
          variant="section-title"
        >
          Payment Terms
        </Heading>
        
        <Text>
        <UnorderedList>
          <ListItem>I accept two forms of payment : USD, Robux</ListItem>
          <ListItem>I require a 25% deposit of the final payment (which will be refunded if I cant complete the order but wont be refunded if you cancel while I am making it)</ListItem>
          <ListItem>Depending on the project payment can be done through Percentage</ListItem>
          <ListItem>I don&apos;t charge extra if you want something changed however if I have already finished the project and you want a large portion of it changed I may charge more</ListItem>
          <ListItem>I am pretty lenient on when I accept payment</ListItem>
          <ListItem>I will refund your deposit if I can&apos;t complete your project </ListItem>
          </UnorderedList>
          <br/>
          The Accounts Money Will Be Sent To
          <List>
          <ListItem>
          <Link href="https://www.roblox.com/users/337146660/profile" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<SiRoblox />}
              >
                CatboyNyako
              </Button>
            </Link>
          </ListItem>
          <ListItem>
          <Link href="https://cash.app/$nyakonii" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<SiCashapp />}
              >
                $nyakonii
              </Button>
            </Link>
          </ListItem>
          </List>
        </Text>
      </SectionX>
      <SectionX delay={0.1} amount="15">
      <Heading
          as="h3"
          bgGradient="linear(to-l, #A020F0,#A020F0)"
          bgClip="text"
          variant="section-title"
        >
          What I am able to do
        </Heading>
        <Text>
            I AM NOT TAKING LONG TERM COMMISSIONS RIGHT NOW <br/>
            I am able to do alot of things when you make your request if its in the realm of something I have done before it will be completed pretty quickly. <br/>
            If it is something that I havent done before I will still be willing to take your project on and try to make it I will do this for free only requesting payment if I succeed in making your project
        <UnorderedList>
        <br/>
          <ListItem>Discord Bots (Varying Complexities if you want a bot with roblox verification then I will require you to have a server)</ListItem>
          <ListItem>Basic Roblox Systems</ListItem>
          <ListItem>API&apos;s connecting Roblox to Discord</ListItem>
          <ListItem>I can also do a group of small scripts</ListItem>
          <ListItem>If what you want is not listed here you can still send a form I will let you know if I will attempt it or not</ListItem>
          </UnorderedList>
        </Text>
      </SectionX>
    </Container>
   )
}

export default TOS