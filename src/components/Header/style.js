import styled from 'styled-components'

export const Container = styled.div`
  /* border: 1px solid black; */
  height: 136px;
  display: flex;
  align-items: center;
`

export const MenuContainer = styled.header`
  /* border: 1px solid black; */
  width: 1273px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }
`

export const Content = styled.div`
  /* border: 1px solid black; */
  display: flex;
  gap: 45px;
  align-items: center;
`

export const Menu = styled.div`
  ul {
    display: flex;
    gap: 30px;
    padding: 6px 0px;
  }

  a {
    font-size: 15px;
    color: #afafbb;
    font-weight: 700;
  }

  a:hover {
    color: #3a3053;
  }
`

export const Account = styled.div`
  display: flex;
  align-items: center;
  gap: 37px;

  a {
    color: #afafbb;
    font-size: 15px;
    font-weight: 700;
  }

  a:hover {
    color: #3a3053;
  }

  button {
    cursor: pointer;
    width: 102px;
    height: 40px;
    border-radius: 20px;
    border: none;
    color: #fff;
    background-color: #2bd1d1;
    font-weight: 700;
    font-size: 16px;
  }

  button:hover {
    opacity: 0.7;
  }
`
