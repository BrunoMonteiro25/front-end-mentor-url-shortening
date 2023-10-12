import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Banner from '../components/Banner'
import Statistics from '../components/Statistics'
import Footer from '../components/Footer'

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

      <Footer />
    </>
  )
}

export default Home
