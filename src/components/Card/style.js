import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  background-color: #f0f1f6;
  height: 600px;

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
