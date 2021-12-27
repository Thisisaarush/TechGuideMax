import React from "react";
import Image from "next/image";

// style
import {
  NavigationBossContainer,
  NavigationContainer,
  LogoContainer,
  DayDateContainer,
  SearchMenuContainer,
  MenuContainer,
} from "./Navigation.style";

// components
import { SearchBar } from "../SearchBar/SearchBar.component";

export const Navigation = () => {
  return (
    <NavigationBossContainer>
      <NavigationContainer>
        <LogoContainer>
          <Image
            src="/icons/logo.png"
            width={200}
            height={200}
            alt="tech guide max logo"
          />
          <DayDateContainer>
            <p>FRIDAY</p>
            <p>DECEMBER 24, 2021</p>
            <p>TODAY IS THE PUPIL OF YESTERDAY</p>
            <span>
              <Image
                src="/icons/instagram.png"
                alt="social media instagram"
                width={20}
                height={20}
              />
              <Image
                src="/icons/twitter.png"
                alt="social media instagram"
                width={20}
                height={20}
              />
              <Image
                src="/icons/youtube.png"
                alt="social media instagram"
                width={20}
                height={20}
              />
            </span>
          </DayDateContainer>
        </LogoContainer>

        <SearchMenuContainer>
          <SearchBar />
          <MenuContainer>
            <span>
              <p>TECHNOLOGY</p>
              <Image
                src="/icons/down-arrow.png"
                alt="down arrow"
                width={10}
                height={10}
              />
            </span>
            <span>
              <p>ENTERTAINMENT</p>
              <Image
                src="/icons/down-arrow.png"
                alt="down arrow"
                width={10}
                height={10}
              />
            </span>
            <span>
              <p>HOW TO</p>
              <Image
                src="/icons/down-arrow.png"
                alt="down arrow"
                width={10}
                height={10}
              />
            </span>
          </MenuContainer>
        </SearchMenuContainer>
      </NavigationContainer>
    </NavigationBossContainer>
  );
};
