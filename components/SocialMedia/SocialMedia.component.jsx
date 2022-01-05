import React from "react";
import styled from "styled-components";
import Image from "next/image";

export const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <a
        href="https://www.instagram.com/thisisaarush/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/icons/instagram.png"
          alt="social media instagram"
          width={20}
          height={20}
        />
      </a>
      <a
        href="https://twitter.com/Thisisaarush"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/icons/twitter.png"
          alt="social media instagram"
          width={20}
          height={20}
        />
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
        <Image
          src="/icons/youtube.png"
          alt="social media instagram"
          width={20}
          height={20}
        />
      </a>
    </SocialMediaContainer>
  );
};

// styled components
const SocialMediaContainer = styled.div`
  display: flex;
  width: 80px;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  user-select: none;
`;
