import React from "react";
import Image from "next/image";

// style
import { FooterContainer, FooterText } from "./Footer.style";

// components
import { SocialMedia } from "../SocialMedia/SocialMedia.component";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        <h1>TECH GUIDE MAX</h1>
        <p>&copy; 2021, ALL RIGHTS RESERVED</p>
        <SocialMedia />
      </FooterText>
      <Image src="/icons/logo.png" alt="logo" width={150} height={150} />
    </FooterContainer>
  );
};
