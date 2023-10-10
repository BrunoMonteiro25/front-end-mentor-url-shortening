import React from 'react'

import { Container } from './style'

import BG from '../../assets/bg-shorten-desktop.svg'

const Input = () => {
  return (
    <Container imageUrl={BG}>
      <input type="text" placeholder="Shorten a link here..." />
      <button>Shorten it!</button>
    </Container>
  )
}

export default Input
