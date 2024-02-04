import { Container, Badge, Link, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="travel">
    <Container>
      <Title>
        A Travel to Remember <Badge>2020</Badge>
      </Title>
      <P>
      User Authentication, sharing travel photos and Blogs.<br></br>
      Viewing other users posts in gallery mode along with contacts. 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/Arko0809/Travel-Blog-Python">
          https://github.com/Arko0809/Travel-Blog-Python <ExternalLinkIcon mx="2px"/>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>FrontEnd</Meta>
          <span>Html, Css, Javascript, Bootstrap</span>
        </ListItem>
        <ListItem>
          <Meta>BackEnd</Meta>
          <span>Python cgi programming.</span>
        </ListItem>
        <ListItem>
          <Meta>Database</Meta>
          <span>Xampp</span>
        </ListItem>
      </List>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/travel.jpg" alt="travel" />
        <WorkImage src="/images/works/travel2.png" alt="travel" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/travel3.png" alt="travel" />
        <WorkImage src="/images/works/travel4.png" alt="travel" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/travel5.png" alt="travel" />
      </SimpleGrid>
      
      
    </Container>
  </Layout>
)

export default Work
