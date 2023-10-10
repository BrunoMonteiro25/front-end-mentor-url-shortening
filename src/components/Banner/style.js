import styled from 'styled-components'

export const Container = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  /* border: 1px solid black; */
  height: 600px;
  display: flex;
  position: relative;

  @media (max-width: 1140px) {
    height: 500px;
  }

  @media (max-width: 660px) {
    margin-left: 30px;
    margin-right: 30px;
    flex-direction: column-reverse;
    align-items: center;
    height: 800px;
  }

  @media (max-width: 620px) {
    height: 770px;
  }

  @media (max-width: 540px) {
    height: 740px;
  }

  @media (max-width: 500px) {
    height: 720px;
  }

  @media (max-width: 450px) {
    height: 700px;
  }

  @media (max-width: 440px) {
    height: 670px;
  }

  @media (max-width: 415px) {
    height: 630px;
  }

  @media (max-width: 400px) {
    height: 600px;
  }

  @media (max-width: 350px) {
    height: 550px;
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
    font-family: 'Poppins', sans-serif;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 50px;
    }

    p {
      font-size: 16px;
      width: 400px;
    }
  }

  @media (max-width: 490px) {
    h1 {
      font-size: 40px;
    }

    p {
      width: 300px;
      margin-top: 10px;
    }
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

  @media (max-width: 755px) {
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
    top: -20px;
    left: 0px;

    img {
      width: 60%;
    }
  }

  @media (max-width: 440px) {
    img {
      width: 55%;
    }
  }

  @media (max-width: 415px) {
    margin-right: 40px;

    img {
      width: 50%;
    }
  }

  @media (max-width: 400px) {
    img {
      width: 45%;
    }
  }

  @media (max-width: 350px) {
    img {
      width: 40%;
    }
  }
`
