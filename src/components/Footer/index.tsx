import React from "react";
import Link from "next/link";

import TwitterIcon from "../Icons/TwitterIcon";
import FacetoSeeIcon from "../Icons/FacetoSeeIcon";
import DiscordIcon from "../Icons/DiscordIcon";
import MailIcon from "../Icons/MailIcon";
import FormIcon from "../Icons/FormIcon";

interface LinkSocialProps {
  id: string;
  link: string;
  icon: any;
}
const Footer = () => {
  const linkSocial: LinkSocialProps[] = [
    {
      id: "home",
      link: "#",
      icon: <FacetoSeeIcon />,
    },
    {
      id: "twitter",
      link: "#",
      icon: <TwitterIcon />,
    },
    {
      id: "discord",
      link: "#",
      icon: <DiscordIcon />,
    },
    {
      id: "mail",
      link: "#",
      icon: <MailIcon />,
    },
    {
      id: "form",
      link: "#",
      icon: <FormIcon />,
    },
  ];
  return (
    <div
      className="flex flex-col items-center justify-center gap-8 bg-[#0F1332] py-8"
      id="contact_us"
    >
      <p className="custom_title  mb-5 text-center text-5xl font-black">
        Contact Us
      </p>
      <div className="flex gap-6 md:gap-10">
        {linkSocial.map(social => (
          <>
            <Link
              key={social.id}
              target="_blank"
              href={social.link}
              className=" group text-white"
            >
              {social.icon}
            </Link>
          </>
        ))}
      </div>

      <p className="text-white">@2023 DeColgen - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
