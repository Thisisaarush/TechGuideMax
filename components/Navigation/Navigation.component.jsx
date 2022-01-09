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
import { SocialMedia } from "../SocialMedia/SocialMedia.component";

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
            <SocialMedia />
          </DayDateContainer>
        </LogoContainer>

        <SearchMenuContainer>
          <SearchBar />
          <MenuContainer>
            <MenuItem>
              <p>
                technology{" "}
                <Image
                  className="arrow"
                  src="/icons/svgs/arrow.svg"
                  width={10}
                  height={10}
                  alt="arrow"
                />
              </p>
              <div className="menu-list">
                <ul>
                  <Link href="/category/android">
                    <a className="menulist-items">
                      <Image
                        src="/icons/svgs/android.svg"
                        width={15}
                        height={15}
                        alt="category android"
                      />
                      <li>Android</li>
                    </a>
                  </Link>
                  <Link href="/category/apple">
                    <a className="menulist-items">
                      <Image
                        src="/icons/svgs/apple.svg"
                        width={15}
                        height={15}
                        alt="category android"
                      />
                      <li>Apple</li>
                    </a>
                  </Link>
                  <Link href="/category/windows">
                    <a className="menulist-items">
                      <Image
                        src="/icons/svgs/windows.svg"
                        width={15}
                        height={15}
                        alt="category android"
                      />
                      <li>Windows</li>
                    </a>
                  </Link>
                </ul>
              </div>
            </MenuItem>

            <MenuItem>
              <Link href="/category/entertainment">
                <a>
                  <p>entertainment</p>
                </a>
              </Link>
            </MenuItem>

            <MenuItem>
              <Link href="/category/howto">
                <a>
                  <p>how to</p>
                </a>
              </Link>
            </MenuItem>
          </MenuContainer>
        </SearchMenuContainer>
      </NavigationContainer>
    </NavigationBossContainer>
  );
};
