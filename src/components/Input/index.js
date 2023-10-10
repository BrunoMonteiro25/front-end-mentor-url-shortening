import React, { useState } from 'react'
import axios from 'axios'
import { Container } from './style'
import BG from '../../assets/bg-shorten-desktop.svg'

const Input = ({ onShorten }) => {
  const [originalLink, setOriginalLink] = useState('')

  const handleShorten = async () => {
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${originalLink}`,
      )

      if (response.data.ok) {
        const result = response.data.result
        if (onShorten) {
          onShorten(result.full_short_link, originalLink)
          setOriginalLink('')
        }
      } else {
        console.error('Falha ao encurtar o link:', response.data.error_code)
      }
    } catch (error) {
      console.error('Falha ao encurtar o link:', error.message)
    }
  }

  return (
    <Container imageUrl={BG}>
      <input
        type="text"
        placeholder="Shorten a link here.."
        value={originalLink}
        onChange={(e) => setOriginalLink(e.target.value)}
      />
      <button onClick={handleShorten}>Shorten it!</button>
    </Container>
  )
}

export default Input
