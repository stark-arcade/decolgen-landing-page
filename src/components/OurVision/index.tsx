import React from "react";

import CardVision from "../Card/CardVision";

const OurVision = () => {
  return (
    <>
      <div className="container mx-auto my-5 lg:max-w-4xl">
        <p className=" custom_title mb-5 text-center text-5xl font-black">
          Our Vision
        </p>
        <div className="mb-4 flex flex-col  gap-4 md:flex-row ">
          <div className="flex flex-col gap-4 md:flex-1 ">
            <div
              className="h-[400px] overflow-hidden md:h-[500px] "
              key="Innovation"
            >
              <CardVision
                content="At DecolGen Labs, our vision is to ignite the blockchain revolution, serving as a beacon for the 'Cool Generation' of innovators, businesses, and forward-thinkers. We are dedicated to demystifying blockchain technology and making its transformative power universally accessible and adaptable."
                title="Pioneering Digital Innovation"
                image_link="/images/art/innovation.svg"
              />
            </div>
            <div
              className=" h-[400px] overflow-hidden md:h-[500px] "
              key="tokenization"
            >
              <CardVision
                content="At DecolGen Labs, our vision is to ignite the blockchain revolution, serving as a beacon for the 'Cool Generation' of innovators, businesses, and forward-thinkers. We are dedicated to demystifying blockchain technology and making its transformative power universally accessible and adaptable."
                title="Revolutionizing Tokenization"
                image_link="/images/art/tokenization.svg"
              />
            </div>
          </div>

          <div
            className="h-[400px] overflow-hidden md:h-auto md:flex-1 "
            key="blockchain"
          >
            <CardVision
              content="At DecolGen Labs, our vision is to ignite the blockchain revolution, serving as a beacon for the 'Cool Generation' of innovators, businesses, and forward-thinkers. We are dedicated to demystifying blockchain technology and making its transformative power universally accessible and adaptable."
              title="Customized Blockchain Solutions"
              image_link="/images/art/blockchain.svg"
            />
          </div>
        </div>
        <div className=" flex flex-col  gap-4 md:flex-row  " key="development">
          <div className="h-[400px] overflow-hidden md:h-auto md:flex-1 ">
            <CardVision
              content="At DecolGen Labs, our vision is to ignite the blockchain revolution, serving as a beacon for the 'Cool Generation' of innovators, businesses, and forward-thinkers. We are dedicated to demystifying blockchain technology and making its transformative power universally accessible and adaptable."
              title="Tailored Product and Service Development"
              image_link="/images/art/development.svg"
            />
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <div
              className="h-[500px] overflow-hidden rounded-3xl"
              key="movement"
            >
              <CardVision
                content="At DecolGen Labs, our vision is to ignite the blockchain revolution, serving as a beacon for the 'Cool Generation' of innovators, businesses, and forward-thinkers. We are dedicated to demystifying blockchain technology and making its transformative power universally accessible and adaptable."
                title="Joining the DecolGen Movement"
                image_link="/images/art/movement.svg"
              />
            </div>
            <div
              className=" h-[500px] overflow-hidden rounded-3xl"
              key="connectivity"
            >
              <CardVision
                content="At DecolGen Labs, our vision is to ignite the blockchain revolution, serving as a beacon for the 'Cool Generation' of innovators, businesses, and forward-thinkers. We are dedicated to demystifying blockchain technology and making its transformative power universally accessible and adaptable."
                title="Interchain Connectivity"
                image_link="/images/art/connectivity.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurVision;
