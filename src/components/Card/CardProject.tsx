import React from "react";
import Image from "next/image";

import ButtonView from "../Button/ButtonView";
export interface CardProjectProps {
  link: string;
  image: string;
  title: string;
  content: string;
  label_btn?: string;
}
const CardProject = ({
  link,
  image,
  title,
  content,
  label_btn,
}: CardProjectProps) => {
  return (
    <div className=" flex h-full flex-col justify-between bg-white p-8 ">
      <div className="  mb-6 flex flex-col">
        <div className="mb-6 overflow-hidden">
          <Image
            src={image}
            alt={`decolgenlabs-${title} `}
            width={500}
            height={500}
          />
        </div>
        <p
          className={`text-xl font-black text-title ${
            title.includes("Starknet Arcade Hub") ? "mb-4" : "mb-6"
          }`}
        >
          {title}
        </p>
        <p className="font-normal ">{content}</p>
      </div>
      <ButtonView label={label_btn} link={link} />
    </div>
  );
};

export default CardProject;
