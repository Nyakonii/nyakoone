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
  <Layout title="Catboy Supremacy">
    <Container>
      <Title>Catboy Supremacy</Title>
      <WorkImage src="/images/CS.png" alt="CS" />
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
      ♡ Welcome to Catboy Supremacy ♡ <br />
        ──── ✧^♡^✧ ──── <br />
        Catboy Supremacy is a Neko and LGBTQ friendly group where you can be
        yourself with people that have similar interests for a unique community
        experience.
        <br />I am currently the Group Manager of Catboy Supremacy this is a
        group based on catboys its a very wholesome group where all catboys and
        non catboys are welcome
      </Text>
      </SectionX>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Group</Meta>
          <Link href="https://www.roblox.com/groups/8279207/Catboy-Supremacy#!/about">
            Roblox Group
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://catboysupremacy.com/">
            CatboySupremacy.com
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Discord</Meta>
          <Link href="https://discord.gg/catboy">
            Discord
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
