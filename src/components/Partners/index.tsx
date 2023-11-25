import Image from "next/image";
import Link from "next/link";
import React from "react";
interface PartnerProps {
  id: string;
  image: string;
  url: string;
}
const Partners = () => {
  const listPartner: PartnerProps[] = [
    {
      id: "argent",
      image: "/images/partners/arcade_hub.svg",
      url: "https://www.argent.xyz/",
    },
    {
      id: "ryglab",
      image: "/images/partners/ryg_labs.svg",
      url: "https://www.itsryg.com/",
    },
    {
      id: "flex",
      image: "/images/partners/flex.svg",
      url: "https://flexing.gg/",
    },
    {
      id: "jeddiswap",
      image: "/images/partners/jeddiswap.svg",
      url: "https://app.jediswap.xyz/#/swap",
    },
    {
      id: "starknetics",
      image: "/images/partners/starknet.svg",
      url: "https://www.starknet.io/en",
    },
    {
      id: "starknet-vn",
      image: "/images/partners/starknet-vn.svg",
      url: "https://twitter.com/starknetvietnam",
    },
    {
      id: "whale-alpha",
      image: "/images/partners/whale-alpha.jpeg",
      url: "https://twitter.com/WhaleAlpha_",
    },
  ];
  return (
    <>
      <div className="bg-[#080C2A]">
        <p className="custom_title mb-5 text-center text-5xl font-black">
          Our Partners
        </p>
        <div className="flex flex-wrap justify-center gap-10 py-10">
          {listPartner.map(part => (
            <Link key={part.id} href={part.url} target="_blank">
              <Image
                alt=""
                src={part.image}
                height={100}
                width={100}
                className="cursor-pointer rounded-full"
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Partners;
