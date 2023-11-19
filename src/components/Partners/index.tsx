import Image from "next/image";
import React from "react";

const Partners = () => {
  const listPartner = [
    {
      id: "argent",
      link: "/images/partners/arcade_hub.svg",
    },
    {
      id: "ryglab",
      link: "/images/partners/ryg_labs.svg",
    },
    {
      id: "flex",
      link: "/images/partners/flex.svg",
    },
    {
      id: "jeddi",
      link: "/images/partners/jeddiswap.svg",
    },
    {
      id: "starknet",
      link: "/images/partners/starknet.svg",
    },
    {
      id: "starknet-vn",
      link: "/images/partners/starknet-vn.svg",
    },
  ];
  return (
    <>
      <div>
        <p>Our Partners</p>
        <div className="flex flex-wrap justify-center gap-10 py-10">
          {listPartner.map(part => (
            <>
              <Image
                alt=""
                src={part.link}
                height={100}
                width={100}
                className="cursor-pointer"
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Partners;
