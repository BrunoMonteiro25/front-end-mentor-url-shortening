/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { MobileMenuContainer } from './style'

const MenuMobile = ({ mobileMenuOpen }) => {
  return (
    <>
      {mobileMenuOpen && (
        <MobileMenuContainer>
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

            <hr />

            <li>
              <a href="#">Login</a>
            </li>
            <button>Sign Up</button>
          </ul>
        </MobileMenuContainer>
      )}
    </>
  )
}

export default MenuMobile
