/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Container, MenuContainer, Menu, Content, Account } from './style'

import Logo from '../../assets/logo.svg'

import { AiOutlineMenu } from 'react-icons/ai'
import MenuMobile from '../MenuMobile'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <Container>
      <MenuContainer>
        <Content>
          <img src={Logo} alt="Shortly" />

          <Menu>
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
          </Menu>
        </Content>

        <Account>
          <a href="#">Login</a>
          <button>Sign Up</button>
        </Account>
      </MenuContainer>

      <div className="mobile">
        <img src={Logo} alt="Shortly" />

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`btn-menu-mobile ${mobileMenuOpen ? 'open' : ''}`}
        >
          <AiOutlineMenu />
        </button>
      </div>

      <MenuMobile mobileMenuOpen={mobileMenuOpen} />
    </Container>
  )
}

export default Header
