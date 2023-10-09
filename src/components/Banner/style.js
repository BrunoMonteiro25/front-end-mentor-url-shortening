import styled from 'styled-components'

export const Container = styled.div`
  margin-left: 10px;
  /* border: 1px solid black; */
  height: 664px;
  display: flex;
  position: relative;

  @media (max-width: 660px) {
    margin-left: 30px;
    flex-direction: column-reverse;
    align-items: center;
    /* position: static; */
  }
`

export const Informations = styled.div`
  /* border: 1px solid black; */
  width: 591px;
  height: 358px;
  margin-top: 80px;

  h1 {
    font-size: 75px;
    color: #36303c;
    line-height: 1.2;
  }

  p {
    color: #9d9ba6;
    font-weight: 500;
    font-size: 22px;
  }

  button {
    cursor: pointer;
    width: 196px;
    margin-top: 30px;
    border-radius: 50px;
    border: none;
    color: #fff;
    background-color: #2bd1d1;
    font-weight: 700;
    font-size: 20px;
    padding: 12px 0px;
  }

  button:hover {
    opacity: 0.7;
  }

  @media (max-width: 1140px) {
    h1 {
      font-size: 60px;
    }

    p {
      font-size: 20px;
      width: 450px;
    }
  }

  @media (max-width: 940px) {
    width: 550px;

    h1 {
      font-size: 50px;
    }

    p {
      font-size: 20px;
      width: 450px;
    }
  }

  @media (max-width: 840px) {
    width: 400px;

    h1 {
      font-size: 40px;
    }

    p {
      font-size: 16px;
      width: 330px;
    }
  }

  @media (max-width: 660px) {
    padding-top: 150px !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-right: 30px;

    h1 {
      font-size: 50px;
    }

    p {
      font-size: 16px;
      width: 400px;
    }
  }

  @media (max-width: 615px) {
    padding-top: 130px !important;
  }

  @media (max-width: 570px) {
    padding-top: 100px !important;
  }

  @media (max-width: 490px) {
    padding-top: 70px !important;

    h1 {
      font-size: 40px;
    }

    p {
      width: 300px;
      margin-top: 10px;
    }
  }

  @media (max-width: 400px) {
    padding-top: 0px !important;
  }
`

export const Image = styled.div`
  position: absolute;
  margin-top: 20px;
  right: -230px;

  @media (max-width: 1040px) {
    right: -280px;

    img {
      width: 90%;
    }
  }

  @media (max-width: 940px) {
    right: -330px;

    img {
      width: 80%;
    }
  }

  @media (max-width: 840px) {
    right: -380px;

    img {
      width: 70%;
    }
  }

  @media (max-width: 700px) {
    right: -430px;

    img {
      width: 60%;
    }
  }

  @media (max-width: 660px) {
    top: -60px;
    left: 0px;

    img {
      width: 70%;
    }
  }

  @media (max-width: 440px) {
    margin-right: 20px;
  }

  @media (max-width: 415px) {
    margin-right: 40px;
  }

  @media (max-width: 400px) {
    img {
      width: 65%;
    }
  }

  @media (max-width: 350px) {
    img {
      width: 60%;
    }
  }
`