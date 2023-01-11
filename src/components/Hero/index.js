import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import {
  Container,
  Bg,
  VideoBg,
  Content,
  H1,
  P,
  HeroBtn,
  ArrowForward,
  ArrowRight,
} from './HeroElements'
import { Button } from '../ButtonElements'

const Hero = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover((prevDate) => !prevDate)
  }

  return (
    <Container id='home'>
      <Bg>
        <VideoBg autoPlay loop muted playsInline src={Video} type='video/mp4' />
      </Bg>
      <Content>
        <H1>Virtual Banking Made Easy</H1>
        <P>
          Sign up for a new account today and receive $250 in credit towards
          your next payment!
        </P>
        <HeroBtn>
          <Button
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtn>
      </Content>
    </Container>
  )
}

export default Hero
