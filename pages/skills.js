import { Container, Heading, Image, List } from "@chakra-ui/react";
  import Layout from "../components/layouts/article";
  import Section from "../components/section";
  import { Progress } from '@chakra-ui/react';

  const Skill = () => {
    return (
      <Layout title="Skills">
        <Container>
            <Section delay={0.3}>
              <Heading as="h3" variant="section-title">
                Programming Languages
              </Heading>
              <List>
                  <Image pr={4} src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="Javascript"/>
                  <Progress colorScheme='green' size='sm' value={80} />
              </List>
              <List>
                  <Image pr={4} src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v2.png" alt="Java"/>
                  Java
                  <Progress colorScheme='green' size='sm' value={70} />
              </List>          
            </Section>
            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                  Technologies
                </Heading>
                <List>
                  <Image pr={4} src="https://img.icons8.com/office/48/000000/react.png" alt="React"/>  
                  <Progress colorScheme='blue' size='sm' value={80} />
                </List> 
                
                <List>
                  <Image pr={4} src="https://img.icons8.com/fluency/48/node-js.png" alt="NodeJS"/>  
                  <Progress colorScheme='blue' size='sm' value={80} />
                </List> 
                <List>
                  <Image pr={4} src="https://img.icons8.com/ios/50/express-js.png" alt="ExpressJS"/>  
                  <Progress colorScheme='blue' size='sm' value={80} />
                </List> 
                <List>
                  <Image pr={4} src=" https://img.icons8.com/color/48/redux.png" alt="Redux"/>  
                  <Progress colorScheme='blue' size='sm' value={80} />
                </List> 
                <List>
                  <Image pr={4} src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="HTML5"/>  
                  <Progress colorScheme='blue' size='sm' value={80} />
                </List>  
                <List>
                  <Image pr={4} src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS3"/>  
                  <Progress colorScheme='blue' size='sm' value={65} />
                </List> 
                <List>
                  <Image pr={4} src="https://img.icons8.com/dusk/64/salesforce.png" alt="Salesforce"/>  
                  <Progress colorScheme='blue' size='sm' value={75} />
                </List>     
                <List>
                  <Image pr={4} src="https://img.icons8.com/color/48/000000/filmora.png" alt="Filmora"/>
                  <Progress colorScheme='blue' size='sm' value={80} />                     
                </List>    
            </Section>
            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                  Databases
                </Heading>
                <List>
                  <Image pr={4} src="https://img.icons8.com/nolan/64/mongo-db.png" alt="MongoDB"/>  
                  <Progress colorScheme='orange' size='sm' value={80} />
                </List> 
                <List>
                  <Image pr={4} src="https://img.icons8.com/color/48/000000/mysql--v1.png" alt="mysql"/>
                  <Progress colorScheme='orange' size='sm' value={80} />                     
                </List> 
            </Section>
        </Container>
      </Layout>
    );
  };
  
  export default Skill;