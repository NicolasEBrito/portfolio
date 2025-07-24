import React from "react";
import profile from "../../assets/profile.jpeg";
import gmail from "../../assets/gmail.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";

const Introduction = () => {
  return (
    <div
      id="intro"
      className="rounded-[32px] w-[90%] md:max-w-[1280px] mx-auto bg-[#2C387E] py-[30px] px-[50px] flex flex-col md:flex-row justify-between align-center mt-[100px]"
    >
      <div className="w-full md:max-w-[60%]">
        <h1 className="text-[32px] font-bold text-white leading-[36px] mb-[15px]">
          Nicolás Brito -<span className="font-normal"> Web Developer</span>
        </h1>
        <p className="text-[24px] text-white leading-[32px]">
          I'm a Full Stack Web Developer with 2+ years of experience, always
          passionated about learning how to use new tools and focused on user
          experience while maintaining a clean code and excellente SEO. When I'm
          not in front of the screen you can finde me at the gym or at the
          bookstore, let's work together!
        </p>
        <div className="flex flex-row justify-start gap-[20px] items-center mt-[20px]">
          <p className="text-[24px] text-white leading-[32px]">Contact me:</p>
          <a href="https://www.instagram.com/nicolas.britoo/">
            <img
              className="w-[25px] h-[25px]"
              src={instagram}
              alt="My Instagram"
            />
          </a>
          <a href="www.linkedin.com/in/nicolas-brito-dev">
            <img
              className="w-[25px] h-[25px]"
              src={linkedin}
              alt="My LinkedIn"
            />
          </a>
          <a href="mailto:nicolaseduardobrito@gmail.com">
            <img className="w-[25px] h-[25px]" src={gmail} alt="My Gmail" />
          </a>
          <a href="https://github.com/NicolasEBrito">
            <img className="w-[25px] h-[25px]" src={github} alt="My Github" />
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <img
          className="w-[250px] h-[250px] object-cover rounded-full mt-[15px] md:mt-[0px]"
          src={profile}
          alt="Nicolás Brito"
        />
      </div>
    </div>
  );
};

export default Introduction;
