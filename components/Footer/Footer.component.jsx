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
          <Image
            src="/icons/instagram.png"
            alt="social media instagram"
            width={25}
            height={25}
          />
          <Image
            src="/icons/twitter.png"
            alt="social media instagram"
            width={25}
            height={25}
          />
          <Image
            src="/icons/youtube.png"
            alt="social media instagram"
            width={25}
            height={25}
          />
        </SocialMediaContainer>
      </FooterText>
      <Image src="/icons/logo.png" alt="logo" width={150} height={150} />
    </FooterContainer>
  );
};
