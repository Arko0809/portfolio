import { Container } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import travel from '../public/images/works/travel.jpg'
import ecomm from '../public/images/works/django.jpg'
import hd from '../public/images/works/hd1.jpg'
import b from '../public/images/works/b1.jpg'
import blog from '../public/images/works/bl1.png'

const Works = () => (
  <Layout title="Works">
    <Container>
          <Section>
              <WorkGridItem id="blog" title="Alabaster Studios" thumbnail={blog}>
              </WorkGridItem>
          </Section>
          <Section>
              <WorkGridItem id="bibliophile" title="BiblioPhile" thumbnail={b}>
              </WorkGridItem>
          </Section>
          <Section>
              <WorkGridItem id="hodophile" title="HodoPhile" thumbnail={hd}>
              </WorkGridItem>
          </Section>
          <Section>
              <WorkGridItem id="travel" title="A Travel to Remember" thumbnail={travel}>
              </WorkGridItem>
          </Section>
          <Section>
              <WorkGridItem id="Ecomm" title="Bibliophilic StockPile" thumbnail={ecomm}> 
              </WorkGridItem>
          </Section>
    </Container>
  </Layout>
)

export default Works
