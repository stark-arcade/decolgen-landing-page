"use client";
import React, { useEffect, useState } from "react";

const ButtonBackTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showTopBtn && (
        <button
          className="group cursor-pointer text-[#202020] "
          onClick={goToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="63"
            viewBox="0 0 60 63"
            fill="none"
          >
            <path
              d="M60 59.1123C60 59.9964 59.6488 60.8442 59.0237 61.4693C58.3986 62.0945 57.5507 62.4456 56.6667 62.4456H3.33333C2.44928 62.4456 1.60143 62.0945 0.976311 61.4693C0.35119 60.8442 8.02368e-07 59.9964 8.02368e-07 59.1123V24.0756C-0.000351612 23.5677 0.115391 23.0664 0.338387 22.61C0.561383 22.1536 0.885734 21.7542 1.28667 21.4423L27.9533 0.702314C28.5385 0.247132 29.2587 0 30 0C30.7413 0 31.4615 0.247132 32.0467 0.702314L58.7133 21.4423C59.1143 21.7542 59.4386 22.1536 59.6616 22.61C59.8846 23.0664 60.0004 23.5677 60 24.0756V59.1123Z"
              fill="white"
            />
            <path
              d="M29.13 25.8796L20.655 31.9396C19.935 32.4496 19.5 33.2746 19.5 34.1596C19.5 36.3946 22.02 37.6846 23.835 36.3946L30 31.9996L36.165 36.3946C37.98 37.6996 40.5 36.3946 40.5 34.1596C40.5 33.2746 40.065 32.4346 39.345 31.9246L30.87 25.8646C30.345 25.5046 29.655 25.5046 29.13 25.8796Z"
              fill="currentColor"
              className="group-hover:fill-[url(#paint0_linear_81_43820)]"
            />
            <path
              d="M29.13 36.3796L20.655 42.4246C19.935 42.9496 19.5 43.7746 19.5 44.6596C19.5 46.8946 22.02 48.1996 23.835 46.8946L30 42.4996L36.165 46.8946C37.98 48.1996 40.5 46.8946 40.5 44.6596C40.5 43.7746 40.065 42.9346 39.345 42.4246L30.87 36.3646C30.345 36.0046 29.655 36.0046 29.13 36.3796Z"
              fill="currentColor"
              className="group-hover:fill-[url(#paint0_linear_81_43820)]"
            />
            <defs>
              <linearGradient
                id="paint0_linear_81_43820"
                x1="43.7029"
                y1="42.7813"
                x2="33.7606"
                y2="16.5898"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E900A9" />
                <stop offset="0.13" stopColor="#E502AC" />
                <stop offset="0.27" stopColor="#D806B5" />
                <stop offset="0.42" stopColor="#C20EC5" />
                <stop offset="0.58" stopColor="#A318DA" />
                <stop offset="0.73" stopColor="#7D25F5" />
                <stop offset="0.78" stopColor="#6F2AFF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_81_43820"
                x1="43.7029"
                y1="53.2813"
                x2="33.7606"
                y2="27.0898"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E900A9" />
                <stop offset="0.13" stopColor="#E502AC" />
                <stop offset="0.27" stopColor="#D806B5" />
                <stop offset="0.42" stopColor="#C20EC5" />
                <stop offset="0.58" stopColor="#A318DA" />
                <stop offset="0.73" stopColor="#7D25F5" />
                <stop offset="0.78" stopColor="#6F2AFF" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      )}
    </>
  );
};

export default ButtonBackTop;
