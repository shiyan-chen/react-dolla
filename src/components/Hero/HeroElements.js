import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const Container = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  position: relative;
  height: 100vh;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`

export const Bg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  --o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`

export const Content = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: auto;
`

export const H1 = styled.h1`
  color: white;
  font-size: 3rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 48opx) {
    font-size: 2rem;
  }
`

export const P = styled.p`
  margin-top: 24px;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 48opx) {
    font-size: 1rem;
  }
`

export const HeroBtn = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 1.25rem;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 1.25rem;
`
