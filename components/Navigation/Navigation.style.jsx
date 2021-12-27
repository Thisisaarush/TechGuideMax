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
`;
export const DayDateContainer = styled.div`
  margin-left: 1rem;
  p {
    margin-bottom: 0.5rem;
  }
  span {
    display: flex;
    width: 30%;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
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
  span {
    background-color: white;
    color: black;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    p {
      margin-right: 5px;
    }
  }
`;
