import styled from 'styled-components'

export const Container = styled.div`
  /* border: 1px solid black; */
  width: 350px;
  height: 268px;
  background-color: #fff;
  position: relative;
  border-radius: 12px;
  margin-top: ${(props) => props.marginTop || 0};

  @media (max-width: 1140px) {
    margin-top: 40px;
  }
`

export const Icon = styled.div`
  width: 88px;
  height: 88px;
  background-color: #3a3053;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -44px;
  left: 32px;

  @media (max-width: 660px) {
    left: 130px;
  }
`

export const Details = styled.div`
  /* border: 1px solid black; */
  width: 290px;
  margin: 70px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .title {
    /* border: 1px solid black; */
    font-weight: 500;
    font-size: 24px;
    color: #36303c;
  }

  .description {
    color: #9b9aa0;
    text-align: start;
    margin-top: 14px;
    font-size: 16px;
    letter-spacing: 0.3px;
  }

  @media (max-width: 660px) {
    align-items: center;

    .description {
      text-align: center;
    }
  }
`
