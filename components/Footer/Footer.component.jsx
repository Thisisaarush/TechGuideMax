import React from "react";
import Image from "next/image";

// style
import {
  FooterContainer,
  FooterText,
  SocialMediaContainer,
} from "./Footer.style";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        <h1>TECH GUIDE MAX</h1>
        <p>&copy; 2021, ALL RIGHTS RESERVED</p>
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
          <a
            href="https://www.youtube.com/channel/UCCemrhxzQZFFV2m6b7id8SQ"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/icons/youtube.png"
              alt="social media instagram"
              width={20}
              height={20}
            />
          </a>
        </SocialMediaContainer>
      </FooterText>
      <Image src="/icons/logo.png" alt="logo" width={150} height={150} />
    </FooterContainer>
  );
};
