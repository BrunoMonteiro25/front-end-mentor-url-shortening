import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  background-color: #f0f1f6;
  /* background-color: #c4caeb; */

  @media (max-width: 1140px) {
    margin-top: 50px;
  }

  @media (max-width: 940px) {
    margin-top: 0px;
  }

  @media (max-width: 755px) {
    margin-top: -50px;
  }

  @media (max-width: 660px) {
    margin-top: 10px;
  }
`

export const Content = styled.div`
  max-width: 1109px;
  margin: 0 auto;
`

export const Links = styled.div`
  max-width: 100%;
  width: 1109px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 25px;
  border-radius: 8px;
  background-color: #fff;
  position: absolute;
  margin-top: 100px;

  p {
    color: #36303c;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  span {
    color: #2bd1d1;
  }

  button {
    cursor: pointer;
    max-width: 196px;
    border-radius: 6px;
    border: none;
    color: #fff;
    background-color: #2bd1d1;
    font-weight: 700;
    font-size: 16px;
    padding: 7px 28px;
    font-family: 'Poppins', sans-serif;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 1140px) {
    margin-top: 150px;
  }

  @media (max-width: 1109px) {
    margin-top: 150px;
    width: 97%;
    margin-left: 10px;
  }

  @media (max-width: 1040px) {
    margin-top: 100px;
  }

  @media (max-width: 660px) {
    margin-top: 105px;
    gap: 10px;
    flex-direction: column;
    width: 90%;
    margin-left: 30px;

    .links {
      flex-direction: column;
      border-top: 1px solid #9d9ba6;
      width: 95%;

      span {
        padding-top: 10px;
      }
    }

    button {
      min-width: 100%;
    }
  }

  @media (max-width: 440px) {
    width: 85%;
  }

  @media (max-width: 350px) {
    width: 83%;

    p,
    span {
      font-size: 14px;
    }
  }
`

export const AdvancedStatistics = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 160px;
  max-width: 1109px;
  margin: 0 auto;
  padding-bottom: 120px;

  .titleAd {
    font-weight: 500;
    font-size: 40px;
    color: #36303c;
  }

  .details {
    max-width: 460px;
    font-size: 16px;
    color: #9b9aa0;
    margin-top: 5px;
    margin-bottom: 60px;
  }

  @media (max-width: 1140px) {
    padding-top: 210px;
  }

  @media (max-width: 1040px) {
    padding-top: 160px;
  }

  @media (max-width: 470px) {
    .details {
      padding: 0px 20px;
    }
  }
`

export const CardContainer = styled.div`
  display: flex;
  gap: 30px;
  position: relative;
  /* border: 1px solid black; */
  height: max-content;

  .decoration {
    content: '';
    width: 30px;
    height: 8px;
    background-color: #2bd1d1;
    position: absolute;
    top: 134px;
    left: 350px;
  }

  .decoration2 {
    content: '';
    width: 30px;
    height: 8px;
    background-color: #2bd1d1;
    position: absolute;
    top: 178px;
    right: 350px;
  }

  .separator {
    display: none;
    content: '';
    width: 8px;
    height: 26px;
    background-color: #2bd1d1;
    position: absolute;
    top: 308px;
    left: 72px;
  }

  .separator2 {
    display: none;
    content: '';
    width: 8px;
    height: 26px;
    background-color: #2bd1d1;
    position: absolute;
    top: 646px;
    left: 72px;
  }

  @media (max-width: 1140px) {
    flex-direction: column;
    margin-top: 20px;

    .decoration,
    .decoration2 {
      display: none;
    }

    .separator,
    .separator2 {
      display: flex;
    }
  }

  @media (max-width: 660px) {
    gap: 60px;

    .separator,
    .separator2 {
      left: 170px;
      height: 56px;
    }

    .separator2 {
      top: 676px;
    }
  }
`
