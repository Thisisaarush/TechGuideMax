import React from "react";
import Image from "next/image";
import Link from "next/link";

// style
import {
  NavigationBossContainer,
  NavigationContainer,
  LogoContainer,
  DayDateContainer,
  SearchMenuContainer,
  MenuContainer,
  MenuItem,
} from "./Navigation.style";

// components
import { SearchBar } from "../SearchBar/SearchBar.component";

export const Navigation = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date();
  let today = date.getDay();
  let day = date.getMonth();

  return (
    <NavigationBossContainer>
      <NavigationContainer>
        <LogoContainer>
          <Link href="/">
            <a className="logo">
              <Image
                src="/icons/logo.png"
                alt="tech guide max logo"
                width={200}
                height={200}
              />
            </a>
          </Link>
          <DayDateContainer>
            <p>{days[today]}</p>
            <p>
              {months[day]} {date.getDate()}
              {","} {date.getFullYear()}
            </p>
            <p>today is the pupil of yesterday</p>
            <span>
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
            </span>
          </DayDateContainer>
        </LogoContainer>

        <SearchMenuContainer>
          <SearchBar />
          <MenuContainer>
            <MenuItem>
              <p>technology</p>
              <Image
                src="/icons/down-arrow.png"
                alt="down arrow"
                width={10}
                height={10}
              />
              <div className="menu-list">
                <ul>
                  <li>Android</li>
                  <li>IOS</li>
                  <li>Windows</li>
                  <li>Mac</li>
                </ul>
              </div>
            </MenuItem>

            <MenuItem>
              <p>entertainment</p>
              <Image
                src="/icons/down-arrow.png"
                alt="down arrow"
                width={10}
                height={10}
              />
              <div className="menu-list">
                <ul>
                  <li>Marvel</li>
                  <li>Movies</li>
                  <li>tv/shows</li>
                </ul>
              </div>
            </MenuItem>

            <MenuItem>
              <p>how to</p>
              <Image
                src="/icons/down-arrow.png"
                alt="down arrow"
                width={10}
                height={10}
              />
              <div className="menu-list">
                <ul>
                  <li>Android</li>
                  <li>IOS</li>
                  <li>Windows</li>
                  <li>Mac</li>
                </ul>
              </div>
            </MenuItem>
          </MenuContainer>
        </SearchMenuContainer>
      </NavigationContainer>
    </NavigationBossContainer>
  );
};
