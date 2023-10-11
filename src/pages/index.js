import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'

import styled from 'styled-components'
import Statistics from '../components/Statistics'

const Container = styled.div`
  max-width: 1109px;
  margin: 0 auto;
  overflow: hidden;
`

const Home = () => {
  return (
    <>
      <Header />

      <Container>
        <Banner />
      </Container>

      <Statistics />
    </>
  )
}

export default Home
