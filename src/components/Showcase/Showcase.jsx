import React from "react";
import rdaImage from "../../assets/rda.png";
import bethRose from "../../assets/bethrose.png";
import midWestern from "../../assets/midwestern.png";
import nexafin from "../../assets/nexafin.png";
import supertek from "../../assets/supertek.png";
import diiirect from "../../assets/diiirect.png";

import AtroposCard from "../Atropos/AtroposCard.jsx";

const Showcase = () => {
  return (
    <div className="w-[90%] md:max-w-[1280px] mx-auto bg-[#2C387E] px-[25px] mt-[100px] rounded-t-[32px] pb-[75px]">
      <head>
        <link rel="stylesheet" href="path/to/atropos.css" />
      </head>
      <h2 className="text-[48px] text-[#ffffff] py-[30px] leading-[56px]">
        These are some of the developments I've been invovled in
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
        <AtroposCard
          name="RDA"
          image={rdaImage}
          description="Whole website renovation"
          link="https://www.rdadigital.com/"
        />
        <AtroposCard
          name="Beth Rose Auctions"
          image={bethRose}
          description="Webpage development with DB use for auctions data"
          link="https://bethroseauction.com/"
        />
        <AtroposCard
          name="Midwestern Equipment"
          image={midWestern}
          description="Landing page hosted in HubSpot"
          link="https://www.midwesternequip.com/"
        />
        <AtroposCard
          name="Nexafin"
          image={nexafin}
          description="Landing page hosted in HubSpot"
          link="https://www.nexafin.com/"
        />
        <AtroposCard
          name="Supertek"
          image={supertek}
          description="Landing page hosted in HubSpot"
          link="https://go.supertek.com.ar/curso"
        />
        <AtroposCard
          name="Diiirect"
          image={diiirect}
          description="Outsourcing website done with AI colaboration"
          lg:link="https://www.diiirect.com/"
        />
      </div>
    </div>
  );
};

export default Showcase;
