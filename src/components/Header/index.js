/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Container, MenuContainer, Menu, Content, Account } from './style'

import Logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <Container>
      <MenuContainer>
        <Content>
          <img src={Logo} alt="Shortly" />

          <Menu>
            <ul>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Resources</a>
              </li>
            </ul>
          </Menu>
        </Content>

        <Account>
          <a href="#">Login</a>
          <button>Sign Up</button>
        </Account>
      </MenuContainer>
    </Container>
  )
}

export default Header
