import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa'
import {
  Container,
  Wrapper,
  LinkContainer,
  LinkWrap,
  LinkItem,
  LinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
  SocialLogo,
  WebsiteRights,
} from './FooterElements'

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LinkContainer>
          <LinkWrap>
            <LinkItem>
              <LinkTitle>About Us</LinkTitle>
              <FooterLink to='/'>How it works</FooterLink>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of Services</FooterLink>
            </LinkItem>
            <LinkItem>
              <LinkTitle>Contact Us</LinkTitle>
              <FooterLink to='/'>Contact</FooterLink>
              <FooterLink to='/'>Support</FooterLink>
              <FooterLink to='/'>Destinations</FooterLink>
              <FooterLink to='/'>Sponsorships</FooterLink>
            </LinkItem>
          </LinkWrap>
          <LinkWrap>
            <LinkItem>
              <LinkTitle>Videos</LinkTitle>
              <FooterLink to='/'>Submit Video</FooterLink>
              <FooterLink to='/'>Ambassadors</FooterLink>
              <FooterLink to='/'>Agency</FooterLink>
              <FooterLink to='/'>Influencer</FooterLink>
            </LinkItem>
            <LinkItem>
              <LinkTitle>Social Media</LinkTitle>
              <FooterLink to='/'>Instagram</FooterLink>
              <FooterLink to='/'>Facebook</FooterLink>
              <FooterLink to='/'>Youtube</FooterLink>
              <FooterLink to='/'>Twitter</FooterLink>
            </LinkItem>
          </LinkWrap>
        </LinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>dolla</SocialLogo>
            <WebsiteRights>
              dolla &copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href='//www.facebook.com'
                target='_blank'
                aria-label='Facebook'
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href='//www.instagram.com'
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='//www.youtube.com'
                target='_blank'
                aria-label='Youtube'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href='//www.twitter.com'
                target='_blank'
                aria-label='Twitter'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href='//www.linkedin.com'
                target='_blank'
                aria-label='Linkedin'
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </Wrapper>
    </Container>
  )
}

export default Footer
