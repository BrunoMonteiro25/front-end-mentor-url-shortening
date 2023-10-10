import styled from 'styled-components'

export const Container = styled.div`
  /* border: 1px solid black; */
  height: 136px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1000;

  .mobile {
    display: none;
  }

  .btn-menu-mobile {
    display: none;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: #fff;
    transition: 0.3s;

    &:hover {
      background-color: #3a3053;
      color: #fff;
    }

    &.open {
      background-color: #3a3053;
      color: #fff;
    }

    svg {
      font-size: 24px;
    }
  }

  @media (max-width: 660px) {
    display: block;

    .mobile {
      /* border: 1px solid black; */
      height: 96px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0px 24px;
    }

    .btn-menu-mobile {
      display: block;
    }
  }
`

export const MenuContainer = styled.header`
  /* border: 1px solid black; */
  width: 1109px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Content = styled.div`
  /* border: 1px solid black; */
  display: flex;
  gap: 45px;
  align-items: center;
  margin-left: 10px;

  @media (max-width: 660px) {
    display: none;
  }
`

export const Menu = styled.div`
  ul {
    display: flex;
    gap: 30px;
    padding: 6px 0px;
  }

  a {
    font-size: 15px;
    color: #9d9ba6;
    font-weight: 700;
  }

  a:hover {
    color: #3a3053;
  }

  @media (max-width: 660px) {
    display: none;
  }
`

export const Account = styled.div`
  display: flex;
  align-items: center;
  gap: 37px;
  margin-right: 10px;

  a {
    color: #9d9ba6;
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

  @media (max-width: 660px) {
    display: none;
  }
`
