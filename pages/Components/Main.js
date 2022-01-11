import React from "react";
import MainComp from "./MainComp";

const Main = () => {
  return (
      <div className="relative z-10">
      <div><img src="./svgs/icon.svg" className="absolute bottom-2 lg:max-w-[51px] md:block hidden left-8" alt="icon" /></div>
    <div className=" md:flex-row gap-7 flex-col flex relative justify-center z-10 md:mt-2 px-4 top-14  md:top-4 lg:top-0 items-center md:items-end pb-10">
      <div className="relative px-8 text-center md:text-left gap-0  md:mb-0 md:gap-2 md:left-[60px] lg:left-[100px] xl:left-[100px] 2xl:left-[100px]  md:bottom-10 2xl:bottom-20 xl:bottom-10  z-10  flex flex-col items-center md:items-start justify-center md:justify-end">
        <h6 className="font-normal text-sm sm:text-base  lg:text-xl xl:text-2xl md:pr-10  text-[#6B7280]">

          Toyota North America
        </h6>
        <h2 className="font-semibold md:leading-[35px] lg:leading-[50px] xl:leading-[67px] text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[56px]  text-[#111827] relative max-w-[500px] md:max-w-[600px]">
          UX optimastion increasing conversion by 30%
        </h2>
      </div>
      <div className=" px-6 md:px-0 md:w-auto">
        <img
          src="./svgs/maindiv.svg"
          className="relative z-0 max-w-full max-h-[90vh]   md:max-w-auto md:max-h-screen "
          alt="div"
        />
        
      </div>
      <div className="  relative 2xl:bottom-20 px-8 text-sm md:px-0 flex flex-col justify-center items-center lg:text-base md:text-sm  xl:text-xl 2xl:text-2xl md:bottom-3 md:right-10 lg:bottom-10 lg:right-10 2xl:right-24 z-10">
        <p className=" text-center md:text-left max-w-[420px] md:max-w-[655px] mb-1 md:mb-3 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor
          nulla nulla quam pellentesque risus consequat est.
          </p>
          <p className="  md:text-left text-center  max-w-[420px] md:max-w-[655px]  mb-3 ">
          Feugiat vulputate sapien enim neque non blandit ullamcorper sit. Eget
          id augue mi nisi quam turpis morbi.
        </p>
      </div>
      
    </div>
    <div className="flex md:flex-row gap-12 flex-col px-8 justify-between md:justify-center lg:gap-12 md:gap-8 xl:gap-16 2xl:gap-20 mt-12 items-center md:px-32 ">
        <div className="flex px-6 md:px-0  flex-wrap mini:flex-nowrap mini:flex-row gap-9 sm:gap-14 justify-center md:flex-col xl:gap-9 lg:gap-7 md:gap-3 nine:gap-5 2xl:gap-11">
            <MainComp title={"Services"} desc={"UX Designing"} />
            <MainComp title={"Dated"} desc={"December 2021"} />
            <MainComp title={"Collaboration"} desc={"Clerk Kent"} />
            
        </div>
        <div className="flex flex-col gap-4 text-center md:text-left md:gap-0 md:justify-center items-center md:items-start">
            <h1 className="md:font-normal  font-medium xl:text-4xl lg:text-3xl text-xl md:text-2xl 2xl:text-5xl text-[#111827]">Aim for simplicity.</h1>
            <p className="max-w-[500px] lg:mt-6 text-sm md:text-base md:mt-3 xl:mt-8 2xl:mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor nulla nulla quam pellentesque risus consequat est. Feugiat vulputate sapien enim neque non blandit ullamcorper sit. Eget id augue mi nisi quam turpis morbi. </p>
            <p className="max-w-[500px] lg:mt-5 text-sm md:text-base md:mt-3 xl:mt-7 2xl:mt-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor nulla nulla quam pellentesque risus consequat est.  </p>
        </div>
        

    </div>
    
    </div>
  );
};

export default Main;
