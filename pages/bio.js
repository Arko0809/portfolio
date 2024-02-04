import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import Paragraph from '../components/paragraph'


const Bio = () => (
    <Layout title="Bio">
        <Container>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                  Work Experience
                </Heading>
                <BioSection>
                  <BioYear>February - April, 2023</BioYear>
                     <br></br>
                     <b>Capgemini / Internship Trainee</b><br></br>
                     Completed Salesforce training cum internship<br></br>
                     Salesforce - Flow, Approval Process,<br></br>
                     Apex, LWC, Experience Cloud
                     <br></br>
                     <br></br>
                     <b>Case Study Project - </b><br></br>
                     <em>1. Kiev Utopia Hospital Website (Salesforce) -</em><br></br>
                      Users can search the doctors by their names or<br></br>
                      specialty. They can check the available doctors and<br></br>
                      book their appointments.
                      <br></br>
                      <br></br>
                     <em>2. Kiev utopia Exam Portal Website (Salesforce) -</em><br></br>
                      Users can register themselves in various exams on a<br></br>
                      specified date and give the examination on that date.<br></br>
                      Their scores will be saved.
                </BioSection>
                <br></br>
                <BioSection>
                  <BioYear>November 2023 - Present</BioYear>
                      <br></br>
                      <b>Capgemini / Senior Analyst</b><br></br>
                      Completed MERN stack training.<br></br>
                      Mongo Db - Database<br></br>
                      Node Js & Express Js - Backend<br></br>
                      React Js, Material UI, styled - Frontend<br></br>
                      Redux Toolkit - State Management<br></br>
                      <br></br>
                      <b>Case Study Project - </b><br></br>
                      <em> Nature Paradise Website (MERN Stack) -</em><br></br>
                      Users can authenticate themselves. They can post<br></br>
                      blogs regarding various aspects of nature and can<br></br>
                      view other user’s posts. Users can provide feedback.<br></br>
                      Ever data is handled through backend and stored in<br></br>
                      cloud database.<br></br>
                </BioSection>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                  Education
                </Heading>
                <BioSection>
                  <BioYear>2016 - 2017</BioYear>
                     <br></br>
                     Completed 10th Standard from Kolkata.<br></br>
                     National Gems Higher Secondary School.<br></br>
                     ICSE Board - 92%
                </BioSection>
                <br></br>
                <BioSection>
                  <BioYear>2018 - 2019</BioYear>
                     <br></br>
                     Completed 12th Standard from Kolkata.<br></br>
                     National Gems Higher Secondary School.<br></br>
                     ISC Board - 91%
                </BioSection>
                <br></br>
                <BioSection>
                  <BioYear>2019 - 2023</BioYear>
                     <br></br>
                     Completed Btech Computer Science in Engineering<br></br>
                     Narula Institute of Technology
                     Kolkata, West Bengal.<br></br>
                     Degree CGPA - 8.82
                </BioSection>
            </Section>
            <Section delay={0.3}>
              <Heading as="h3" variant="section-title">
                Hobbies
              </Heading>
              <Paragraph>
                •	Making Cinema - Direction, Screenplay, Script, Editing.<br></br>
                •	Writing Poems and Stories; Voice Acting.<br></br>
                •	Reading books.<br></br>
                •	Playing Cricket, Football. <br></br>
                •	Listening to Music.<br></br>
              </Paragraph>
            </Section>
        </Container>
    </Layout>
)

export default Bio
