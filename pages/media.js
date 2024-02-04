// import NextLink from 'next/link'
import {Link, Container, Heading, SimpleGrid, Button, List, ListItem, Icon} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import { FaFacebook, FaQuoteRight } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import thumbYouTube from '../public/images/links/youtube.png'
import { WorkImage } from '../components/work'


const Media = () => (
  <Layout title="Social Media"> 
    <Container>
      
      <Section delay={0.3}>
        <WorkImage src="/images/bg.jpg" alt="background" />
        <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
          Social Links-
        </Heading>
        <List>
          <ListItem>
            <Link href="https://www.linkedin.com/in/soham-dey-506342196/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={BsLinkedin} />}
              >
                 Soham Dey
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/Arko0809" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                Arko0809
              </Button>
            </Link>
          </ListItem>
         
          <ListItem>
            <Link href="https://www.facebook.com/profile.php?id=100005075986982" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={FaFacebook} />}
              >
                Soham Dey
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/simply_arko/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @simply_arko
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.yourquote.in/simply_arko" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={FaQuoteRight} />}
              >
                Follow my thoughts on YourQuote
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={1} gap={1}>
          <GridItem href="https://www.youtube.com/channel/UCFepEfe3BDxdHn45hvjrduQ" thumbnail={thumbYouTube}>
            My YouTube channel-<b>Alabaster Studios</b>
          </GridItem>
        </SimpleGrid>
      </Section>

      
    </Container>
  </Layout>
)

export default Media
