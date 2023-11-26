import React from "react";
interface IProps {
  className?: string;
}
const TwitterIcon = ({ className }: IProps) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="currentColor"
        className={`transform transition-transform ${className}`}
      >
        <path
          d="M25.2013 1.53735H30.108L19.388 13.7907L32 30.4614H22.1253L14.392 20.3494L5.54133 30.4614H0.632L12.0987 17.3547L0 1.53869H10.1253L17.116 10.7814L25.2013 1.53735ZM23.48 27.5254H26.1987L8.648 4.32002H5.73067L23.48 27.5254Z"
          fill="currentColor"
          className={`group-hover:fill-[url('#paint0_linear_401_2613')]`}
        />
        <defs>
          <linearGradient
            id="paint0_linear_401_2613"
            x1="-16.5893"
            y1="34.8728"
            x2="36.1257"
            y2="-6.20616"
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
    </>
  );
};

export default TwitterIcon;
