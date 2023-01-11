import React from 'react'
import { Button } from '../ButtonElements'
import {
  Container,
  Wrapper,
  Row,
  Column1,
  Column2,
  Content,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from './InfoElements'

const Info = (props) => {
  return (
    <Container lightBg={props.lightBg} id={props.id}>
      <Wrapper>
        <Row imgStart={props.imgStart}>
          <Column1>
            <Content>
              <TopLine>{props.topLine}</TopLine>
              <Heading lightText={props.lightText}>{props.headline}</Heading>
              <Subtitle dartText={props.darkText}>{props.description}</Subtitle>
              <BtnWrap>
                <Button
                  to='home'
                  smooth='true'
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  primary={props.primary ? 'true' : 'false'}
                  dark={props.dark ? 'true' : 'false'}
                >
                  {props.buttonLable}
                </Button>
              </BtnWrap>
            </Content>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={props.img} alt={props.alt} />
            </ImgWrap>
          </Column2>
        </Row>
      </Wrapper>
    </Container>
  )
}

export default Info
