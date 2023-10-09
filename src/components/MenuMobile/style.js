import styled from 'styled-components'

export const MobileMenuContainer = styled.div`
  display: none;
  height: max-content;
  background-color: #3a3053;
  border-radius: 10px;
  margin: 0 24px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0px;

    li {
      margin-bottom: 30px;
    }

    hr {
      width: 85%;
      margin-bottom: 30px;
      border-color: #9d9ba6;
    }

    a {
      font-size: 18px;
      color: #fff;
      text-decoration: none;
      font-weight: 700;

      &:hover {
        color: #2bd1d1;
      }
    }
  }

  button {
    cursor: pointer;
    width: 85%;
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

  @media (max-width: 660px) {
    display: block;
  }
`
