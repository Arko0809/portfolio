import { Container, Badge, Link, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Ecomm">
    <Container>
      <Title>
        Bibliophilic StockPile <Badge>2022</Badge>
      </Title>
      <P>
      E-commerce Website using Django.
      User can choose from different genres of books and 
      can place order. They can track their items by giving their order id.
      they can view various blogs shared by superuser, and can contact them as per 
      their requirements.
      </P>
      <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://bibliophilic-stockpile.herokuapp.com/shop/">
            https://bibliophilic-stockpile.herokuapp.com/shop/ <ExternalLinkIcon mx="2px"/>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>FrontEnd</Meta>
            <span>Html, Css, Javascript, Jquery, Bootstrap</span>
          </ListItem>
          <ListItem>
            <Meta>BackEnd</Meta>
            <span>Django</span>
          </ListItem>
          <ListItem>
            <Meta>Database</Meta>
            <span>sqlite3, Django Admin</span>
          </ListItem>
      </List>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/django.jpg" alt="django" />
        <WorkImage src="/images/works/ecomm2.jpg" alt="django" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/ecomm3.jpg" alt="django" />
        <WorkImage src="/images/works/ecomm4.jpg" alt="django" />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/ecomm5.jpg" alt="django" />
        <WorkImage src="/images/works/ecomm6.jpg" alt="django" />
      </SimpleGrid>
      
    </Container>
  </Layout>
)

export default Work
