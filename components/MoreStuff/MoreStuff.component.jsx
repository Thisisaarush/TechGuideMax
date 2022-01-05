import React from "react";
import styled from "styled-components";

export const MoreStuff = () => {
  return (
    <MoreStuffContainer>
      <h2>more stuff</h2>
      <Stuff>
        iPhone 14 EXCLUSIVE FIRST LOOK! No notch! New TITANIUM design! Do buy
        iPhone 13!
      </Stuff>
      <Stuff>
        iPhone 14 EXCLUSIVE FIRST LOOK! No notch! New TITANIUM design! Do buy
        iPhone 13!
      </Stuff>
      <Stuff>
        iPhone 14 EXCLUSIVE FIRST LOOK! No notch! New TITANIUM design! Do buy
        iPhone 13!
      </Stuff>
      <Stuff>
        iPhone 14 EXCLUSIVE FIRST LOOK! No notch! New TITANIUM design! Do buy
        iPhone 13!
      </Stuff>
      <Stuff>
        iPhone 14 EXCLUSIVE FIRST LOOK! No notch! New TITANIUM design! Do buy
        iPhone 13!
      </Stuff>
    </MoreStuffContainer>
  );
};

// styled components
const MoreStuffContainer = styled.div`
  width: 80%;
  margin-inline: auto;
  margin-bottom: 5rem;
`;
const Stuff = styled.div`
  width: 50%;
  background-color: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.primaryColor};
  padding: 1rem;
  margin-top: 1rem;
  text-transform: capitalize;
  font-family: ${(props) => props.theme.bodyFont};
`;
