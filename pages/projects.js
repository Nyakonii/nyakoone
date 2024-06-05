import {
  Container,
  Box,
  Heading,
  Image,
  Progress,
  Text,
  SimpleGrid,
  Divider,
  Badge
} from '@chakra-ui/react'
import { SectionY } from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbCA from '../public/images/ca.png'
import thumbBC from '../public/images/Blackcat.png'
import thumbCS from '../public/images/CS.png'

const Projects = () => {
  return (
    <Container>
      <Heading
        as="h1"
        fontSize={45}
        mb={4}
        bgClip="text"
        bgGradient="linear(to-l, #7928CA,#FF0080)"
      >
        Projects
      </Heading>
      <Divider my={6} />
      <SimpleGrid columns={[1, 1, 3]} gap={2}>
        <SectionY amount={15}>
          <WorkGridItem id="CA" title="Continental Army" thumbnail={thumbCA}>
            <Badge colorScheme="white" mr={2}>
              Roblox Group
            </Badge>
            <br />
            Continental Army is a group game on roblox with 250k+ members and
            has a main game known as Bunker Hill
          </WorkGridItem>
        </SectionY>
        <SectionY amount={-15}>
          <WorkGridItem
            id="BC"
            title="Black Cat Productions"
            thumbnail={thumbBC}
          >
            <Badge colorScheme="white" mr={2}>
              Roblox Group
            </Badge>
            <br />
            <Text>
              BlackCat Productions is a group that makes high quality games,
              currently the flagship game being made is Edged Combat a game
              based on melee combat
            </Text>
          </WorkGridItem>
        </SectionY>
        <SectionY amount={15}>
          <WorkGridItem id="CS" title="Catboy Supremacy" thumbnail={thumbCS}>
            <Badge colorScheme="white" mr={2}>
              Roblox Group
            </Badge>
            <br />I am currently the Group Manager of Catboy Supremacy this is a
            group based on catboys its a very wholesome group where all catboys
            and non catboys are welcome
          </WorkGridItem>
        </SectionY>
      </SimpleGrid>
    </Container>
  )
}

export default Projects
