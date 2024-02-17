// import NextLink from 'next/link'
import {Link, Container, Heading, Box, Image, Button, useColorModeValue} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Soham Dey
            </Heading>
            <p>MERN Stack Developer || Content Creator</p>
          </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
          <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/arko.jpg" alt="Profile image"/>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
            My name is Soham Dey, also known as Arko. I am currently employed as a MERN Stack Developer at Capgemini. 
            My professional journey is driven by a passion for continuous learning and a desire to explore my full potential. 
            I am committed to contributing to an organization that values dedication, innovation, and growth.
            In addition to my technical expertise, I am an avid Writer and Cinephile. 
            On my YouTube channel, I create engaging content such as audio stories, vlogs, documentaries, and short films. 
            I believe that connecting with like-minded individuals opens up a world of possibilities, and I look forward to exploring these opportunities together.
            Feel free to reach out, and let’s embark on this exciting journey!
        </Paragraph>
        <Box align="center" my={4}>
              <Link href="https://drive.google.com/file/d/1prilVsNyARIpVyJYocLalxL6_bvKQDWJ/view?usp=sharing" target="_blank">
                <Button colorScheme='teal'>Resume</Button>
              </Link>
        </Box>
        <Heading as="h3" variant="section-title">
          Contact Me
        </Heading>
        <Box borderRadius="lg" mb={6} p={3} textAlign="center" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
          Mobile - +91 8617759496<br></br>
          Email - sohamdey08@gmail.com<br></br>
          Work Email - soham.a.dey@capgemini.com
        </Box>
      </Section>     
    </Container>
  </Layout>
)

export default Home







