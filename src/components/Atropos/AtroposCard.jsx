import React from "react";
import Atropos from "atropos/react";

const AtroposCard = ({ image, name, description, link }) => {
  return (
    <div className="flex flex-col items-center text-left max-w-[320px]">
      <a className="no-underline max-w-[320px]" href={link}>
        <Atropos className="my-atropos rounded-[32px] mb-[15px]">
          <img
            className="w-full h-full rounded-[32px] object-cover "
            src={image}
            alt={name}
          />
        </Atropos>
        <span className="text-[28px] leading-[36px] text-[#ffffff] mb-[15px]">
          {name}
        </span>
        <p className="text-[20px] leading-[24px] text-[#ffffff] mt-[20px]">
          {description}
        </p>
      </a>
    </div>
  );
};

export default AtroposCard;
