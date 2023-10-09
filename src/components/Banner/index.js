import React from 'react'

import { Container, Informations, Image } from './style'

import ImageBG from '../../assets/illustration-working.svg'

const Banner = () => {
  return (
    <Container>
      <Informations>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>Get Started</button>
      </Informations>

      <Image>
        <img src={ImageBG} alt="Background" />
      </Image>
    </Container>
  )
}

export default Banner
