import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
  Nav,
  Container,
  Logo,
  MobileIcon,
  Menu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements'

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Container>
        <Logo to='/'>dolla</Logo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <Menu>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="discover">Discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services">Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="signup">Sign Up</NavLinks>
          </NavItem>
        </Menu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Container>
    </Nav>
  )
}

export default Navbar