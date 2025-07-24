import React from "react";
import java from "../../assets/java.png";
import reactLogo from "../../assets/react.svg";
import mysql from "../../assets/mysql.png";
import hubspot from "../../assets/hubspot.png";

const Toolkit = () => {
  const tools = [
    { name: "Java", image: java },
    { name: "React.js", image: reactLogo },
    { name: "MySQL", image: mysql },
    { name: "HubSpot", image: hubspot },
  ];
  return (
    <div className="w-[90%] md:max-w-[1280px] mx-auto bg-[#2C387E] px-[25px] my-[100px] rounded-[32px] p-[25px]">
      <h2 className="text-[32px] text-white font-bold mb-[30px] leading-[32px] text-center">
        My main stack
      </h2>
      <div className="flex flex-col md:flex-row justify-around">
        {tools.map((tool, index) => (
          <div
            className="flex flex-col items-center gap-[15px] mb-[25px] md:mb-[0px]"
            key={index}
          >
            <img
              className="w-[100px] h-[100px]"
              src={tool.image}
              alt={tool.name}
            />
            <p className="font-bold text-[24px] leading-[32px] text-white">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolkit;
