import React from 'react'
import {
  Container,
  Icon,
  CloseIcon,
  Wrapper,
  Menu,
  SidebarLink,
  SideBtn,
  SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon onClick={toggle} />
      </Icon>
      <Wrapper>
        <Menu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
        </Menu>
        <SideBtn>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtn>
      </Wrapper>
    </Container>
  )
}

export default Sidebar