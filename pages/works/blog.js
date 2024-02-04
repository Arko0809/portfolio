import { Container, Badge, Link, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="blog">
    <Container>
      <Title>
        Alabaster Studios Blog <Badge>2024</Badge>
      </Title>
      <P>
      My Youtube Channel Blog Website.
      </P>
      <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://alabasterstudios.onrender.com/">
            https://alabasterstudios.onrender.com/ <ExternalLinkIcon mx="2px"/>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/Arko0809/blog">
            https://github.com/Arko0809/blog <ExternalLinkIcon mx="2px"/>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>FrontEnd</Meta>
            <span>React, Redux Toolkit</span>
          </ListItem>
          <ListItem>
            <Meta>BackEnd</Meta>
            <span>Node JS, Express JS</span>
          </ListItem>
          <ListItem>
            <Meta>Database</Meta>
            <span>MongoDb, Firebase</span>
          </ListItem>
      </List>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/bl1.png" alt="blog" />
        <WorkImage src="/images/works/bl2.png" alt="blog" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/bl3.png" alt="blog" />
        <WorkImage src="/images/works/bl4.png" alt="blog" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/bl5.png" alt="blog" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work