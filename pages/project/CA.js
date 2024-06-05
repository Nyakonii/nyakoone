import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
  Text,
  Heading,
  UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import{ SectionX, SectionY } from '../../components/section'

const Work = () => (
  <Layout title="CA">
    <Container>
      <Title>Continental Army</Title>
      <WorkImage src="/images/bh1.png" alt="BH" />
      <Heading
          as="h3"
          variant="section-title"
          bgGradient="linear(to-l, #A020F0,#A020F0)"
          bgClip="text"
        >
          About The Group
        </Heading>
      <SectionX delay={0.1} amount="15">
      <Text>
      Continental Army is a group game on roblox with 250k+ members and has a main game known as Bunker Hill. <br/>
      The Group was made a few years ago and has a growing community and 10 currently joinable regiments
      </Text>
      </SectionX>
      <Heading
          as="h3"
          variant="section-title"
          bgGradient="linear(to-l, #FF0080,#FF0080)"
          bgClip="text"
        >
          Major Tasks I Have Completed
        </Heading>
      <SectionX delay={0.1} amount="-15">
      <Text>
        <UnorderedList>
          <ListItem>Added Discord Verification To The Website</ListItem>
          <ListItem>Added The Medals System</ListItem>
          <ListItem>Rewrote The Ranker Bot</ListItem>
          <ListItem>Rewrote The AntiCheat</ListItem>
          <ListItem>Leading Future Development Of The Group</ListItem>
        </UnorderedList>
      </Text>
      </SectionX>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
