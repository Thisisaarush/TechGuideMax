import styled from "styled-components";

// styled component
export const ToTopContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.theme.secondaryColor};
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 88vh 30px auto auto;
  z-index: 10;
  transform: rotate(90deg);

  .hide {
    display: none;
  }
  .arrow {
    transition: all 0.3s ease-out;
  }
  &:hover {
    .arrow {
      transform: translateX(-4px);
    }
  }
`;
