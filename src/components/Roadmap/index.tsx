import React from "react";

import CardRoadMap from "../Card/CardRoadMap";

const RoadMap = () => {
  const listRoadMap = [
    {
      id: "q4-2023",
      title: "Q4 2023",
      content: [
        "FaceToSee #NFTMinting on 21 Oct 1PM UTC on Flex",
        "After that, we start to unveil the Starknet Arcade Hub - the enigmatic portal beckoning all to the Starknet realm, with Coin Flip game.",
      ],
    },
    {
      id: "q1-2024",
      title: "Q1 2024",
      content: [
        "Coin Flip is just a small part of the Arcade Hub, we also plan to introduce the PvP Game - a fusion of sound, strategy, and sorcery.",
        "Dive into the unknown #Starknet OGs! With every phase, we draw back the veils of mystery, beckoning you closer to our grand vision.",
      ],
    },
  ];
  return (
    <>
      <div className="my-5">
        <p className=" custom_title mb-5 text-center text-5xl font-black">
          Roadmap
        </p>
        <div className="border-b-2  border-t-2 border-b-white  border-t-white">
          <div className="container mx-auto max-w-4xl py-8">
            <div>
              {listRoadMap.map(road => (
                <CardRoadMap
                  key={road.id}
                  title={road.title}
                  content={road.content}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadMap;
