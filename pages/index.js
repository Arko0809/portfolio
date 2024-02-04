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
            Myself, Soham Dey aka Arko.
            Currently, I&apos;m working as a MERN Stack Developer in Capgemini. 
            I intend to build a career with an organization, committed and dedicated people who will help me to explore my full potential and attend growth and establishment.
            Motivated by continuous learning, I'm on a journey to merge the best of Salesforce and MERN 
            technologies to create innovative solutions. Let's connect and explore the world of possibilities together! 
            Apart from my profession, I&apos;m a Writer and Cinephile. 
            I&apos;m a content creator in YouTube which is about my audio stories, vlogs, documentaries, short films.
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







