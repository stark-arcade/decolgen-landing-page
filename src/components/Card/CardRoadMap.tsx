import React from "react";

interface IProps {
  title?: string;
  content: string[];
}
const CardRoadMap = ({ title, content }: IProps) => {
  return (
    <div className="ka-card-gradient-1 flex h-fit  w-[300px] flex-col gap-10 rounded-3xl p-6 md:w-[520px]">
      {title && <p className="text-3xl font-extrabold">{title}</p>}

      <ul className="">
        {content.map((item, index) => (
          <li key={`${index}-road`}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardRoadMap;
