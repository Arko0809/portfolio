import { Container, Badge, Link, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="bibliophile">
    <Container>
      <Title>
        Bibliophile<Badge>2022</Badge>
      </Title>
      <P>
      Here you go!
      A full working E-commerce bookstore!
      </P>
      <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://bibliophile.vercel.app/">
            https://bibliophile.vercel.app/ <ExternalLinkIcon mx="2px"/>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>FrontEnd</Meta>
            <span>Next JS</span>
          </ListItem>
          <ListItem>
            <Meta>BackEnd</Meta>
            <span>Next JS</span>
          </ListItem>
          <ListItem>
            <Meta>Database</Meta>
            <span>MongoDb</span>
          </ListItem>
      </List>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/b1.jpg" alt="bibliophile" />
        <WorkImage src="/images/works/b2.jpg" alt="bibliophile" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/b3.jpg" alt="bibliophile" />
        <WorkImage src="/images/works/b4.jpg" alt="bibliophile" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/b5.jpg" alt="bibliophile" />
        <WorkImage src="/images/works/b6.jpg" alt="bibliophile" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/b7.jpg" alt="bibliophile" />
        <WorkImage src="/images/works/b8.jpg" alt="bibliophile" />
      </SimpleGrid>
      
    </Container>
  </Layout>
)

export default Work
