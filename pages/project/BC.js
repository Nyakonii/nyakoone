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
  <Layout title="BlackCat Productions">
    <Container>
      <Title>Black Cat Productions</Title>
      <WorkImage src="/images/Blackcat.png" alt="BC" />
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
        Welcome to BlackCat Productions Where we bring you simple yet
        top-of-the-line experiences.
        <br />
        <br />
        BlackCat Productions is a group that makes high quality games, currently
        the flagship game being made is Edged Combat a game based on melee
        combat
      </Text>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Group</Meta>
          <Link href="https://www.roblox.com/groups/13250851/BlackCat-Productions#!/about">
            The BlackCat Productions Group
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
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
          <ListItem>Developing The Melee System For EC</ListItem>
          <ListItem>Developing BLADE</ListItem>
        </UnorderedList>
      </Text>
      </SectionX>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
