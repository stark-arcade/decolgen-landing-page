import React from "react";

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
  return (
    <>
      <div className="flex items-center gap-10">
        {listSeciton.map(item => (
          <div id={item.id} className="cursor-pointer text-white" key={item.id}>
            {item.label}
          </div>
        ))}
      </div>
    </>
  );
};

export default Navigation;
