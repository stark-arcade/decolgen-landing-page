import React from "react";

import CardRoadMap from "../Card/CardRoadMap";

const RoadMap = () => {
  const listRoadMap = [
    {
      id: "q4-2023",
      label: "Q4 2023",
      content: [
        "FaceToSee #NFTMinting on 21 Oct 1PM UTC on Flex",
        "After that, we start to unveil the Starknet Arcade Hub - the enigmatic portal beckoning all to the Starknet realm, with Coin Flip game.",
      ],
    },
    {
      id: "q1-2024",
      label: "Q1 2024",
      content: [
        "Game Expansion",
        "PvP based concept",
        "Utilities to Ecosysterm NFTs",
        "Advancing our commitment to core projects within Starknet realm",
      ],
    },
    {
      id: "q2-2024",
      label: "Q2 2024",
      title: "Path to Mass Adoption",
      content: [
        "Coin Flip is just a small part of the Arcade Hub, we also plan to introduce the PvP Game - a fusion of sound, strategy, and sorcery.",
        "Dive into the unknown #Starknet OGs! With every phase, we draw back the veils of mystery, beckoning you closer to our grand vision.",
      ],
    },
  ];
  return (
    <>
      <p className="custom_title mb-5 text-center text-5xl font-black">
        Roadmap
      </p>
      <div className="bg-[#202020]">
        <div className="container mx-auto max-w-5xl ">
          <div className="timeline-component ">
            <div className="absolute left-[33.5%] h-full w-[3px] bg-white"></div>
            <div className="flex flex-col ">
              {listRoadMap.map(road => (
                <div key={road.id} className="relative flex gap-20 py-[180px]">
                  <p className="ka-text-gradient-1 timeline-title flex-grow text-5xl font-extrabold">
                    {road.label}
                  </p>

                  <div className="timeline-circle" />

                  <CardRoadMap title={road.title} content={road.content} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadMap;
