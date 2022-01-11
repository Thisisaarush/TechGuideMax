import styled from "styled-components";

// styled components
export const NavigationBossContainer = styled.nav`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding: 20px;

  @media screen and (${(props) => props.theme.mobileSize}) {
    padding: 10px;
  }
`;
export const NavigationContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (${(props) => props.theme.mobileSize}) {
    flex-direction: column;
    width: 100%;
  }
  @media screen and (${(props) => props.theme.tabSize}) {
    width: 100%;
  }
`;
export const LogoContainer = styled.div`
  width: 50%;
  display: flex;
  .logo {
    user-select: none;
  }

  @media screen and (${(props) => props.theme.mobileSize}) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
export const DayDateContainer = styled.div`
  width: 50%;
  margin-left: 1rem;
  text-transform: uppercase;
  p {
    margin-bottom: 0.5rem;
  }

  @media screen and (${(props) => props.theme.mobileSize}) {
    width: 100%;
    .quote {
      display: none;
    }
  }
  @media screen and (${(props) => props.theme.tabSize}) {
    width: 100%;
    .quote {
      display: none;
    }
  }
`;
export const SearchMenuContainer = styled.div`
  width: 50%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;

  @media screen and (${(props) => props.theme.mobileSize}) {
    width: 100%;
    align-items: center;
    height: 140px;
  }
  @media screen and (${(props) => props.theme.tabSize}) {
    height: 150px;
  }
`;
export const MenuContainer = styled.div`
  background-color: ${(props) => props.theme.cardBackground};
  width: 450px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid ${(props) => props.theme.borderColor};
  user-select: none;

  @media screen and (${(props) => props.theme.mobileSize}) {
    width: 95vw;
  }
`;
export const MenuItem = styled.span`
  text-transform: uppercase;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-out;

  .arrow {
    transform: rotate(-90deg);
    transition: all 0.3s ease-out;
  }

  .menu-list {
    width: 100%;
    height: fit-content;
    background-color: white;
    position: absolute;
    top: 32px;
    font-size: ${(props) => props.theme.fontSizeSmall};
    background-color: ${(props) => props.theme.cardBackground};
    overflow: hidden;
    border-right: 1px solid ${(props) => props.theme.borderColor};
    border-left: 1px solid ${(props) => props.theme.borderColor};
    z-index: 12;
    display: none;

    .menulist-items {
      display: flex;
      align-items: center;
      border-bottom: 1px solid ${(props) => props.theme.borderColor};
      padding: 0.7rem 1rem;

      &:hover {
        background-color: #ffffff78;
      }
    }

    li {
      margin-left: 1rem;
      background-color: ${(props) => props.theme.cardBackground};
      color: white;
      background-color: transparent;
    }
  }

  &:hover {
    .menu-list {
      display: block;
    }
  }

  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    .arrow {
      transform: rotate(90deg);
    }
  }

  @media screen and (${(props) => props.theme.mobileSize}) {
    p {
      font-size: ${(props) => props.theme.fontSizeSmall};
    }
  }
`;
