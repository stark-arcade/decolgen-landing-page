import React from "react";
import Link from "next/link";

import TwitterIcon from "@/public/social/twitter.svg";
import FaceIcon from "@/public/social/face.svg";
import DiscordIcon from "@/public/social/discord.svg";
import MailIcon from "@/public/social/mail.svg";
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
      icon: <FaceIcon className="text-white" />,
    },
    {
      id: "twitter",
      link: "#",
      icon: <TwitterIcon className="text-white" />,
    },
    {
      id: "discord",
      link: "#",
      icon: <DiscordIcon className="text-white" />,
    },
    {
      id: "mail",
      link: "#",
      icon: <MailIcon className="text-white" />,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-8 bg-[#0F1332] py-8">
      <p className="custom_title  mb-5 text-center text-5xl font-black">
        Contact Us
      </p>
      <div className="flex gap-6">
        {linkSocial.map(social => (
          <>
            <Link key={social.id} target="_blank" href={social.link}>
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
