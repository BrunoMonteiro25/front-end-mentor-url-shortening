import React from 'react'
import { Container, Icon, Details } from './style'

const Card = ({ icon, title, description, marginTop }) => {
  return (
    <Container marginTop={marginTop}>
      <Icon>
        <img src={icon} alt={title} />
      </Icon>

      <Details>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </Details>
    </Container>
  )
}

export default Card
