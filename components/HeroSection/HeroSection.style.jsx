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
  .first-image-container {
    width: 50%;
    height: 350px;
    position: relative;
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
  .middle-first,
  .middle-second {
    border-top: 1px solid ${(props) => props.theme.borderColor};
  }
  .middle-first {
    border-right: 1px solid ${(props) => props.theme.borderColor};
  }
  .middle-last {
    border-left: 1px solid ${(props) => props.theme.borderColor};
  }
`;
export const LastSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  grid-column: 1 / span 2;
  .last-image-container {
    width: 50%;
    height: 350px;
    position: relative;
  }
`;
export const FirstLastTextContainer = styled.span`
  width: 40%;
  margin: 0 auto;
  margin-top: 1rem;
  margin-left: 2rem;
  font-size: 1.1rem;
`;
export const MiddleTextContainer = styled.span`
  position: absolute;
  bottom: 20px;
  margin-left: 2rem;
`;
