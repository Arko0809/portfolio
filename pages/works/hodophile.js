import { Container, Badge, Link, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="hodophile">
    <Container>
      <Title>
        Hodophile <Badge>2022</Badge>
      </Title>
      <P>
      Travel Blog Website.
      People can share their travel pictures and package description.
      Other users can review on it.
      </P>
      <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://hodophile.herokuapp.com/">
            https://hodophile.herokuapp.com/ <ExternalLinkIcon mx="2px"/>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>FrontEnd</Meta>
            <span>Bootstrap, Ejs</span>
          </ListItem>
          <ListItem>
            <Meta>BackEnd</Meta>
            <span>Node JS</span>
          </ListItem>
          <ListItem>
            <Meta>Database</Meta>
            <span>MongoDb</span>
          </ListItem>
      </List>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/hd1.jpg" alt="hodophile" />
        <WorkImage src="/images/works/hd2.jpg" alt="hodophile" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/hd3.jpg" alt="hodophile" />
        <WorkImage src="/images/works/hd4.jpg" alt="hodophile" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/hd5.jpg" alt="hodophile" />
        <WorkImage src="/images/works/hd6.jpg" alt="hodophile" />
      </SimpleGrid>
      
    </Container>
  </Layout>
)

export default Work
