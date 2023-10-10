import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  width: 1109px;
  height: 168px;
  background-color: #3a3053;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 24px;
  border-radius: 12px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 650px;
  /* margin-left: 30px; */
  font-family: 'Poppins', sans-serif;

  input {
    padding: 14px 24px;
    max-width: 100%;
    width: 100%;
    border-radius: 8px;
    border: none;
    font-size: 18px;
    margin-left: 64px;
  }

  button {
    cursor: pointer;
    width: 100%;
    max-width: 196px;
    border-radius: 8px;
    border: none;
    color: #fff;
    background-color: #2bd1d1;
    font-weight: 700;
    font-size: 20px;
    padding: 11px 0px;
    margin-right: 66px;
    white-space: nowrap;
    font-family: 'Poppins', sans-serif;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 1109px) {
    width: 97%;
    margin-left: 10px;
  }

  @media (max-width: 1040px) {
    top: 600px;
  }

  @media (max-width: 940px) {
    top: 550px;
  }

  @media (max-width: 755px) {
    top: 500px;
  }

  @media (max-width: 660px) {
    justify-content: center;
    flex-direction: column;
    width: 90%;
    margin-left: 30px;
    gap: 18px;
    top: 870px;

    input {
      width: 90%;
      margin: 0;
    }

    button {
      max-width: 90%;
      margin-left: 65px;
    }
  }

  @media (max-width: 620px) {
    top: 830px;
  }

  @media (max-width: 540px) {
    top: 800px;
  }

  @media (max-width: 500px) {
    top: 780px;
  }

  @media (max-width: 450px) {
    top: 760px;
  }

  @media (max-width: 440px) {
    top: 740px;
    width: 85%;
  }

  @media (max-width: 415px) {
    top: 700px;
  }

  @media (max-width: 400px) {
    top: 670px;
  }

  @media (max-width: 350px) {
    top: 620px;
    width: 83%;
  }
`
