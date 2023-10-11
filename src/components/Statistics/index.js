import React, { useState } from 'react'
import {
  AdvancedStatistics,
  CardContainer,
  Container,
  Content,
  Links,
} from './style'
import Input from '../Input'
import Card from '../Card'

import Icon1 from '../../assets/icon-brand-recognition.svg'
import Icon2 from '../../assets/icon-detailed-records.svg'
import Icon3 from '../../assets/icon-fully-customizable.svg'

const Statistics = () => {
  const [originalLink, setOriginalLink] = useState('')
  const [shortenedLink, setShortenedLink] = useState('')
  const [isCopied, setIsCopied] = useState(false)

  const title1 = 'Brand Recognition'
  const title2 = 'Detailed Records'
  const title3 = 'Fully Customizable'

  const description1 =
    "Boost your brand recnognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."

  const description2 =
    'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'

  const description3 =
    'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'

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

      <AdvancedStatistics>
        <p className="titleAd">Advanced Statistics</p>
        <p className="details">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>

        <CardContainer>
          <Card icon={Icon1} title={title1} description={description1} />

          <Card
            icon={Icon2}
            title={title2}
            description={description2}
            marginTop="44px"
          />

          <Card
            icon={Icon3}
            title={title3}
            description={description3}
            marginTop="88px"
          />

          <div className="decoration"></div>
          <div className="decoration2"></div>

          <div className="separator"></div>
          <div className="separator2"></div>
        </CardContainer>
      </AdvancedStatistics>
    </Container>
  )
}

export default Statistics
