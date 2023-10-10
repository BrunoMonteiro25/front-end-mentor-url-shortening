import React, { useState } from 'react'
import { Container, Content, Links } from './style'
import Input from '../Input'

const Card = () => {
  const [originalLink, setOriginalLink] = useState('')
  const [shortenedLink, setShortenedLink] = useState('')
  const [isCopied, setIsCopied] = useState(false)

  // eslint-disable-next-line no-unused-vars
  const handleShorten = (result) => {
    setShortenedLink(result)
  }

  const handleCopy = () => {
    const copyText = document.createElement('textarea')
    copyText.value = shortenedLink
    document.body.appendChild(copyText)
    copyText.select()
    document.execCommand('copy')
    document.body.removeChild(copyText)

    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 10000)
  }

  return (
    <Container>
      <Content>
        <Input
          onShorten={(result, originalLink) => {
            setShortenedLink(result)
            setOriginalLink(originalLink)
            setIsCopied(false)
          }}
        />

        {shortenedLink && (
          <>
            <Links>
              <p>{originalLink}</p>

              <div className="links">
                <span>{shortenedLink}</span>
                <button
                  onClick={handleCopy}
                  style={{
                    backgroundColor: isCopied ? '#3A3053' : '#2bd1d1',
                  }}
                >
                  {isCopied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </Links>
          </>
        )}
      </Content>
    </Container>
  )
}

export default Card
