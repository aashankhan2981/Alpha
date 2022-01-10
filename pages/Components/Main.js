import React from "react";

const Main = () => {
  return (
      <div className="relative z-10">
      <div><img src="./svgs/icon.svg" className="absolute bottom-2 left-8" alt="icon" /></div>
    <div className=" flex relative justify-center z-10 mt-2 px-2    items-end pb-10">
      <div className="relative gap-2 left-[100px] xl:left-[148px] 2xl:bottom-20 xl:bottom-10  z-10  flex flex-col items-start justify-end">
        <h6 className="font-normal text-xl xl:text-2xl pr-10  text-[#6B7280]">

          Toyota North America
        </h6>
        <h2 className="font-semibold leading-[50px] xl:leading-[67px] text-4xl xl:text-[56px]  text-[#111827] relative max-w-[600px]">
          UX optimastion increasing conversion by 30%
        </h2>
      </div>
      <div>
        <img
          src="./svgs/maindiv.svg"
          className="relative z-0 max-h-screen "
          alt="div"
        />
        
      </div>
      <div className="relative 2xl:bottom-20 bottom-10 right-24 z-10">
        <p className="max-w-[655px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor
          nulla nulla quam pellentesque risus consequat est.
          <br />
          <br />
          Feugiat vulputate sapien enim neque non blandit ullamcorper sit. Eget
          id augue mi nisi quam turpis morbi.
        </p>
      </div>
      
    </div>
    <div className="flex justify-center gap-20 mt-12 items-center px-3 ">
        <div className="flex flex-col gap-11">
            <div>
                <h4 className="font-medium text-2xl text-[#111827]">Services</h4>
                <p className="font-normal text-lg text-[#4B5563]">UX Designing</p>
            </div>
            <div>
                <h4 className="font-medium text-2xl text-[#111827]">Dated</h4>
                <p className="font-normal text-lg text-[#4B5563]">December 2021</p>
            </div>
            <div>
                <h4 className="font-medium text-2xl text-[#111827]">Collaboration</h4>
                <p className="font-normal text-lg text-[#4B5563]">Clerk Kent</p>
            </div>
        </div>
        <div>
            <h1 className="font-normal text-5xl text-[#111827]">Aim for simplicity.</h1>
            <p className="max-w-[500px] mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor nulla nulla quam pellentesque risus consequat est. Feugiat vulputate sapien enim neque non blandit ullamcorper sit. Eget id augue mi nisi quam turpis morbi. </p>
            <p className="max-w-[500px] mt-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor nulla nulla quam pellentesque risus consequat est.  </p>
        </div>
        

    </div>
    
    </div>
  );
};

export default Main;
