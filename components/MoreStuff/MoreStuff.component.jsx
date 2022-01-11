import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const MoreStuff = ({ MoreStuffData }) => {
  return (
    <MoreStuffContainer>
      <h2>more stuff</h2>
      {MoreStuffData.slice(-5).map((item) => (
        <Link href={`/story/latest/${item.id}`} key={item.id}>
          <a>
            <Stuff>{item.title}</Stuff>
          </a>
        </Link>
      ))}
    </MoreStuffContainer>
  );
};

// styled components
const MoreStuffContainer = styled.div`
  width: 80%;
  margin-inline: auto;
  margin-bottom: 5rem;

  @media screen and (${(props) => props.theme.mobileSize}) {
    width: 95%;
    h2 {
      text-align: center;
    }
  }
`;
const Stuff = styled.div`
  width: 50%;
  background-color: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.primaryColor};
  padding: 1rem;
  margin-top: 1rem;
  text-transform: capitalize;
  font-family: ${(props) => props.theme.bodyFont};

  &:hover {
    text-decoration: underline;
  }

  @media screen and (${(props) => props.theme.mobileSize}) {
    width: 100%;
    font-size: ${(props) => props.theme.fontSizeTiny};
  }
`;
