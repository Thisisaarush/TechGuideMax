import styled from "styled-components";

// styled component
export const ToTopContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.theme.secondaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 88vh 30px auto auto;
  z-index: 10;
  display: none;

  .arrow {
    transform: rotate(180deg);
  }
`;
