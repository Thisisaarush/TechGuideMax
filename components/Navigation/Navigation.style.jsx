import styled from "styled-components";

// styled components
export const NavigationBossContainer = styled.nav`
  width: 100vw;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding: 20px;
`;
export const NavigationContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LogoContainer = styled.div`
  width: 50%;
  display: flex;
  .logo {
    user-select: none;
  }
`;
export const DayDateContainer = styled.div`
  width: 50%;
  margin-left: 1rem;
  text-transform: uppercase;
  p {
    margin-bottom: 0.5rem;
  }
  span {
    display: flex;
    width: 80px;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    user-select: none;
  }
`;
export const SearchMenuContainer = styled.div`
  width: 50%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
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
`;
export const MenuItem = styled.span`
  text-transform: uppercase;
  background-color: white;
  color: black;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  position: relative;
  cursor: pointer;
  p {
    margin-right: 5px;
  }

  .menu-list {
    width: 100%;
    height: fit-content;
    background-color: white;
    position: absolute;
    top: 25px;
    font-size: ${(props) => props.theme.fontSizeSmall};
    background-color: ${(props) => props.theme.cardBackground};
    overflow: hidden;
    border-right: 1px solid ${(props) => props.theme.borderColor};
    border-left: 1px solid ${(props) => props.theme.borderColor};
    z-index: 12;
    display: none;

    li {
      padding: 0.5rem 0.7rem;
      background-color: ${(props) => props.theme.cardBackground};
      color: white;
      border-bottom: 1px solid ${(props) => props.theme.borderColor};

      &:hover {
        background-color: ${(props) => props.theme.primaryColor};
      }
    }
  }

  &:hover {
    .menu-list {
      display: block;
    }
  }
`;
