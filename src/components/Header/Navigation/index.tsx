"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navigation = () => {
  const listSeciton = [
    {
      id: "our_project",
      label: "Our Projects",
    },
    {
      id: "road_map",
      label: "Road Map",
    },
    {
      id: "partners",
      label: "Partners",
    },
    {
      id: "contact_us",
      label: "Contact Us",
    },
  ];
  const [active, setActive] = useState("");
  useEffect(() => {
    setActive(window.location.href.split("#")[1]);
  }, []);

  return (
    <>
      <div className="absolute left-0 top-full flex w-full flex-col items-end gap-2 rounded-b-3xl bg-inherit  pr-6  md:relative  md:top-0 md:w-fit md:flex-row md:items-center md:gap-10 md:bg-transparent md:pr-0 ">
        {listSeciton.map(item => {
          return (
            <Link
              href={`/#${item.id}`}
              className={`cursor-pointer rounded-lg p-2 text-lg font-bold text-white  ${
                active == item.id ? "bg-gradient-1" : "ka-nav"
              } `}
              onClick={() => {
                setActive(item.id);
              }}
              aria-label={`Decolgen Labs Decolgen-Labs-navigation ${item.id}`}
              key={`${item.id}-link`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Navigation;
