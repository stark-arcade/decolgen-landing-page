import React from "react";

const ButtonExplore = () => {
  return (
    <button className="ka-bg-gradient-1  group inline-flex items-center gap-2 rounded-3xl px-8 py-4  ">
      <span className="  font-bold uppercase ">explore more</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        className=" fill-current  "
      >
        <path
          d="M3.92986 0.563039C3.72505 0.680418 3.5594 0.8556 3.45366 1.06666C3.34792 1.27772 3.30678 1.51527 3.33538 1.7496L5.14882 21.2105C5.26474 22.1554 6.38218 22.5958 7.1113 21.9838L10.5229 19.1206L12.2389 22.093C13.2258 23.802 15.2077 23.9818 16.9165 22.9949C18.626 22.008 19.4612 20.202 18.4743 18.493L16.7643 15.5311L20.8837 14.0323C21.7782 13.7066 21.9555 12.5191 21.1952 11.9462L5.24818 0.645119C5.06056 0.503972 4.83566 0.420962 4.60133 0.406372C4.367 0.391783 4.13354 0.446254 3.92986 0.563039ZM6.06058 4.26096L17.985 12.533L13.2539 14.2546L13.2759 14.2889L16.3959 19.693C16.7387 20.2865 16.3105 20.5738 15.7167 20.9165C15.123 21.2592 14.6603 21.4865 14.3175 20.893L11.1975 15.4889L11.1728 15.4414L7.26226 18.7238L6.06058 4.26096Z"
          fill="currentColor"
          className="group-hover:fill-[url('#paint0_linear_291_1742')]"
        />
        <defs>
          <linearGradient
            id="paint0_linear_291_1742"
            x1="-6.18493"
            y1="27.1332"
            x2="30.8832"
            y2="6.47837"
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
  );
};

export default ButtonExplore;
