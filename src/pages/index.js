import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'

import styled from 'styled-components'

const Container = styled.div`
  max-width: 1293px;
  margin: 0 auto;
  height: 1000px;
  overflow-x: hidden;
`

const Home = () => {
  return (
    <>
      <Header />

      <Container>
        <Banner />
      </Container>
    </>
  )
}

export default Home
