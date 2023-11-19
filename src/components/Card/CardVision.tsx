import Image from "next/image";
import React from "react";
interface IProps {
  title: string;
  image_link: string;
  content: string;
}
const CardVision = ({ title, content, image_link }: IProps) => {
  return (
    <>
      <div className=" group h-full  w-full cursor-pointer overflow-hidden rounded-3xl bg-card">
        <div className=" relative  h-full   p-8 transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className=" absolute inset-0 flex h-full w-full flex-col items-center justify-center py-6 ">
            <p className=" mb-6 text-center text-3xl font-extrabold text-white md:mb-10">
              {title}
            </p>
            <div className="flex items-center justify-center">
              <Image
                src={image_link}
                height={300}
                width={300}
                alt={title}
                className="max-h-[200px] max-w-[200px] md:max-h-[300px] md:max-w-[300px]"
              />
            </div>
          </div>
          <div className="backface-hidden absolute  inset-0 h-full w-full bg-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="flex h-full w-full flex-col items-center justify-center p-8 align-middle">
              <p className="mb-6 text-2xl font-extrabold">{title}</p>
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardVision;
