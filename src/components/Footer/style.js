import styled from 'styled-components'

export const Container = styled.div`
  background-color: #3a3053;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 250px;

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  p {
    font-weight: 700;
    font-size: 40px;
    color: #fff;
  }

  button {
    cursor: pointer;
    margin-top: 23px;
    width: 196px;
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

  @media (max-width: 470px) {
    p {
      font-size: 32px;
    }
  }

  @media (max-width: 380px) {
    p {
      font-size: 24px;
    }

    button {
      font-size: 18px;
    }
  }
`

export const FooterStyled = styled.div`
  background-color: #232027;
  height: 310px;

  @media (max-width: 932px) {
    height: max-content;
    padding-bottom: 60px;
  }
`

export const FooterContainer = styled.div`
  max-width: 1109px;
  margin: 0 auto;
  /* border: 1px solid white; */
  height: 100%;
  display: flex;
  gap: 260px;

  .logo {
    filter: invert(100%);
    margin-top: 70px;
    width: max-content;
    height: max-content;
  }

  .container-items {
    display: flex;
    gap: 85px;
    /* border: 1px solid white; */
  }

  .items {
    /* border: 1px solid white; */
    width: max-content;
    margin-top: 70px;
    height: max-content;

    p {
      color: #fff;
      font-weight: 700;
      margin-bottom: 20px;
      letter-spacing: 0.3px;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    a {
      color: #fff;
      font-weight: 500;
    }

    a:hover {
      color: #2bd1d1;
    }
  }

  .social {
    margin-top: 70px;
    display: flex;
    width: max-content;
    height: max-content;
    gap: 24px;

    img {
      cursor: pointer;
    }
  }

  @media (max-width: 1140px) {
    margin-left: 10px;
    gap: 250px;
  }

  @media (max-width: 1112px) {
    gap: 240px;
  }

  @media (max-width: 1102px) {
    gap: 230px;
  }

  @media (max-width: 1092px) {
    gap: 220px;
  }

  @media (max-width: 1082px) {
    gap: 220px;
  }

  @media (max-width: 1072px) {
    gap: 210px;
  }

  @media (max-width: 1062px) {
    gap: 200px;
  }

  @media (max-width: 1052px) {
    gap: 190px;
  }

  @media (max-width: 1042px) {
    gap: 180px;
  }

  @media (max-width: 1032px) {
    gap: 170px;
  }

  @media (max-width: 1022px) {
    gap: 160px;
  }

  @media (max-width: 1012px) {
    gap: 150px;
  }

  @media (max-width: 1002px) {
    gap: 140px;
  }

  @media (max-width: 992px) {
    gap: 130px;
  }

  @media (max-width: 982px) {
    gap: 120px;
  }

  @media (max-width: 972px) {
    gap: 110px;
  }

  @media (max-width: 962px) {
    gap: 100px;
  }

  @media (max-width: 952px) {
    gap: 90px;
  }

  @media (max-width: 942px) {
    gap: 80px;
  }

  @media (max-width: 932px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-left: 0px;

    .container-items {
      justify-content: center;
    }
  }

  @media (max-width: 755px) {
    .container-items {
      gap: 65px;
    }
  }

  @media (max-width: 690px) {
    .container-items {
      gap: 55px;
    }
  }

  @media (max-width: 660px) {
    gap: 10px;
    text-align: center;

    .container-items {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0px;
      /* border: 1px solid white; */
    }
  }
`
