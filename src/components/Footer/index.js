/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Container, FooterStyled, FooterContainer } from './style'

import BG from '../../assets/bg-boost-desktop.svg'

import Logo from '../../assets/logo.svg'

import Facebook from '../../assets/icon-facebook.svg'
import Twitter from '../../assets/icon-twitter.svg'
import Pinterest from '../../assets/icon-pinterest.svg'
import Instagram from '../../assets/icon-instagram.svg'

const Footer = () => {
  return (
    <>
      <Container imageUrl={BG}>
        <div className="center">
          <p>Boost your links today</p>
          <button>Get Started</button>
        </div>
      </Container>

      <FooterStyled>
        <FooterContainer>
          <img src={Logo} alt="Shortly" className="logo" />

          <div className="container-items">
            <div className="items">
              <p>Features</p>
              <ul>
                <li>
                  <a href="#">Link Shortening</a>
                </li>
                <li>
                  <a href="#">Branded Links</a>
                </li>
                <li>
                  <a href="#">Analytics</a>
                </li>
              </ul>
            </div>

            <div className="items">
              <p>Resources</p>
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Developers</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>

            <div className="items">
              <p>Company</p>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Carrers</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="social">
              <a href="">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="#">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="#">
                <img src={Pinterest} alt="Pinterest" />
              </a>
              <a href="#">
                <img src={Instagram} alt="Instagram" />
              </a>
            </div>
          </div>
        </FooterContainer>
      </FooterStyled>
    </>
  )
}

export default Footer
