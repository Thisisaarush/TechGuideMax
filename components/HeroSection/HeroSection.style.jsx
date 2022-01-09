import styled from "styled-components";

// styled components
export const HeroSectionContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-top: 5rem;
  margin-bottom: 10rem;
`;
export const FirstSection = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: 1 / span 2;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  .first-image-container {
    width: 100%;
    height: 350px;
    position: relative;
  }
  .first-image-link {
    width: 50%;
  }
`;
export const MiddleSection = styled.div`
  display: flex;
  position: relative;
  font-size: 0.9rem;
  .middle-image-container {
    width: 100%;
    height: 350px;
    position: relative;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
  }
  .middle-image-link {
    width: 100%;
  }
  .middle-first,
  .middle-second-last {
    border-right: 1px solid ${(props) => props.theme.borderColor};
  }
`;
export const LastSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  grid-column: 1 / span 2;
  .last-image-container {
    width: 100%;
    height: 350px;
    position: relative;
  }
  .last-image-link {
    width: 50%;
  }
`;
export const FirstLastTextContainer = styled.span`
  width: 40%;
  margin: 0 auto;
  margin-top: 1rem;
  margin-left: 2rem;
  font-size: 1.1rem;

  h1 {
    transition: all 0.2s ease-out;
    &:hover {
      color: ${(props) => props.theme.primaryColor};
    }
  }
`;
export const MiddleTextContainer = styled.span`
  position: absolute;
  bottom: 20px;
  margin-left: 2rem;

  h1 {
    transition: all 0.2s ease-out;
    &:hover {
      color: ${(props) => props.theme.primaryColor};
    }
  }
`;
