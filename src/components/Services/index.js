import React from 'react'
import Icon1 from '../../images/relaxation.svg'
import Icon2 from '../../images/office.svg'
import Icon3 from '../../images/savings.svg'
import { Container, H1, Wrapper, Card, Icon, H2, P } from './ServicesElements'

const Services = () => {
  return (
    <Container id='services'>
      <H1>Our Services</H1>
      <Wrapper>
        <Card>
          <Icon src={Icon1} />
          <H2>Reduce Expenses</H2>
          <P>We help reduce your fess and increase your overall revenue.</P>
        </Card>
        <Card>
          <Icon src={Icon2} />
          <H2>Virtual Offices</H2>
          <P>You can access our platform online anywhere in the world.</P>
        </Card>
        <Card>
          <Icon src={Icon3} />
          <H2>Premium Benefits</H2>
          <P>Unlock our special membership card that returns 5% cash back.</P>
        </Card>
      </Wrapper>
    </Container>
  )
}

export default Services
