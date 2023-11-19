import React from "react";
interface IProps {
  title: string;
  image_link: string;
  content: string;
}
const CardVision = ({ title, content, image_link }: IProps) => {
  return (
    <>
      <div className="">
        <div className="">
          <p>{title}</p>
          <image href={image_link} />
        </div>
        <div className="">
          <p>{title}</p>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};

export default CardVision;
