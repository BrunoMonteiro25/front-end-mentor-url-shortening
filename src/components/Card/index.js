import React from 'react'
import { Container, Content, Links } from './style'
import Input from '../Input'

const Card = () => {
  return (
    <Container>
      <Content>
        <Input />

        <Links>
          <p>https://brunomonteiro.vercel.app/</p>

          <div className="links">
            <span>https://bm.vel.app/</span>
            <button>Copy</button>
          </div>
        </Links>
      </Content>
    </Container>
  )
}

export default Card
