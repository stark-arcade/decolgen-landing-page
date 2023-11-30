import React from "react";
import Image from "next/image";

import Header from "@/components/Header";

const Pagenotfound = () => {
  return (
    <main className=" min-h-screen bg-body bg-body_art p-4    text-white md:p-0">
      <Header />
      <div className="container mx-auto my-auto flex flex-col items-center justify-center bg-center bg-no-repeat">
        <Image
          src="/images/art/bg/notfound.svg"
          width={650}
          height={650}
          alt="Decolgen Labs Notfound Image"
        />
      </div>
    </main>
  );
};

export default Pagenotfound;
