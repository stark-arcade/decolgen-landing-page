import React from "react";

import ButtonExplore from "../Button/ButtonExplore";

const About = () => {
  return (
    <>
      <div className="container mx-auto my-5 ">
        <div className="flex w-full flex-wrap gap-10 ">
          <div className="flex-1 text-white">
            <div className="w-full rounded-3xl bg-card p-8 py-20 text-center">
              <p className="mb-6 text-6xl font-[900]">About DeColGen</p>
              <p className="mb-10 text-lg">
                DeColGen is a Web3 Development Lab, dedicated to exploring the
                identity and ownership of digital assets in integration with
                gamified experience to push forward the multi-chain adoption of
                NFT.
              </p>
              <ButtonExplore />
            </div>
          </div>
          <div className="flex-1  text-white">
            <div className="h-full min-h-[390px] w-full rounded-3xl bg-about bg-cover bg-center text-center"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
