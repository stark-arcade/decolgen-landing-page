"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import MenuIcon from "../Icons/MenuIcon";
import { debounce, throttle } from "../../../utils/utils";

import Navigation from "./Navigation";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  const [transparency, setTransparency] = useState(0.0);
  function handleScroll() {
    if (window.pageYOffset > 500) {
      setTransparency(1);
    } else {
      setTransparency(window.pageYOffset / 500.0);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", throttle(debounce(handleScroll)));
    return () =>
      window.removeEventListener("scroll", throttle(debounce(handleScroll)));
  }, []);
  return (
    <>
      <header className="sticky left-0 right-0 top-0 z-20 py-5 ">
        <div
          className={`container mx-auto flex  h-[40px] items-center justify-between ${
            openMenu && "rounded-b-none rounded-t-3xl"
          }  bg-header bg-opacity-80 p-8 md:rounded-3xl  ${
            transparency != 0 && "backdrop-blur-xl "
          } relative`}
        >
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="40"
              aria-label="Decolgen Labs Logo"
              viewBox="0 0 23 40"
              fill="none"
            >
              <g clipPath="url(#standard)">
                <path
                  d="M22.0683 6.42427V33.5773C22.0685 34.4213 21.9023 35.2571 21.5792 36.0369C21.2561 36.8166 20.7825 37.525 20.1854 38.1215C19.5883 38.718 18.8794 39.191 18.0994 39.5133C17.3193 39.8357 16.4834 40.001 15.6393 40H6.41641C4.71397 39.9987 3.08171 39.3215 1.87848 38.1171C0.675264 36.9127 -0.000417123 35.2797 1.93194e-07 33.5773V20.7382C0.657207 21.43 4.60674 25.499 11.0059 25.5069C17.438 25.5242 21.4127 21.419 22.062 20.7382C21.7476 20.2665 18.0527 14.9208 11.2527 14.8092C4.17751 14.6897 0.265715 20.3372 0.00157399 20.7382V6.43057C0.00136749 5.58699 0.16734 4.75164 0.490018 3.97222C0.812697 3.1928 1.28576 2.48458 1.88218 1.88801C2.47861 1.29144 3.18671 0.818208 3.96605 0.495339C4.74539 0.172469 5.5807 0.00628968 6.42428 0.0062897H15.6393C16.4829 0.00546345 17.3184 0.170826 18.098 0.492932C18.8777 0.815039 19.5863 1.28758 20.1833 1.88356C20.7803 2.47955 21.254 3.1873 21.5775 3.96641C21.9009 4.74551 22.0677 5.5807 22.0683 6.42427Z"
                  fill="white"
                />
                <path
                  d="M11.0342 25.5084C13.9926 25.5084 16.3909 23.1101 16.3909 20.1517C16.3909 17.1933 13.9926 14.795 11.0342 14.795C8.07577 14.795 5.67749 17.1933 5.67749 20.1517C5.67749 23.1101 8.07577 25.5084 11.0342 25.5084Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="standard">
                  <rect width="22.0683" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>

          {openMenu && <Navigation />}
          <MenuIcon isOpen={openMenu} onToggle={handleOpenMenu} />
        </div>
      </header>
    </>
  );
};

export default Header;
