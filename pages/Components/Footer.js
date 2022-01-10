import React from "react";
import CaseStudies from "./CaseStudies";
import FotterGallery from "./FotterGallery";
import Lastfoot from "./Lastfoot";
import SecondPara from "./SecondPara";

const Footer = () => {
  const num = [1, 2, 3, 4];
  return (
    <div className="relative  top-24 z-10">
      <div className="relative bottom-52   z-10 flex flex-col items-center justify-center px-[148px] gap-8">
        <div className="mb-8">
          <img src="./svgs/divfoot1.svg" alt="foot-div" />
        </div>
      </div>
      <div className="relative z-10 bg-black w-full  flex flex-col  items-center  justify-center  ">
        <div className="flex px-[148px] relative z-10 bottom-52 flex-col  gap-8">
          <div className="">
            <img src="./svgs/divfoot2.svg" alt="foot-div" />
          </div>
          <div>
            <img src="./svgs/divfoot3.svg" alt="foot-div" />
          </div>
        </div>
        <div className="relative z-10 bottom-12 ">
          <SecondPara
            black={true}
            title={"The balance of forces."}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor nulla nulla quam pellentesque risus consequat est. Feugiat vulputate sapien enim neque non blandit ullamcorper sit. Eget id augue mi nisi quam turpis morbi. "
            }
          />
        </div>
        <div className="flex gap-8 px-[148px] mb-24">
          <FotterGallery
            src1={"./svgs/footergallery1.svg"}
            src2={"./svgs/footerframe2.svg"}
          />
          <FotterGallery
            src1={"./svgs/footerframe2.svg"}
            src2={"./svgs/footergallery1.svg"}
          />
        </div>
      </div>
      <div className="bg-black 3xl:items-center w-full pb-10 px-[148px] flex flex-col items-start">
        <SecondPara
          title={"Very soflty."}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor nulla nulla quam pellentesque risus consequat est. Feugiat vulputate sapien enim neque non blandit ullamcorper sit. Eget id augue mi nisi quam turpis morbi. "
          }
          black={true}
        />
        <div className="flex gap-8  my-24">
          {num.map((num, index) => {
            return (
              <div key={index}>
                <img
                  src="./svgs/Footsecondframe.svg"
                  key={num}
                  alt="footer-div"
                />
              </div>
            );
          })}
        </div>
        <div>
          <h2 className="text-white 3xl:text-center font-medium text-[54px]">
            More Case Studies
          </h2>
          <div className="flex justify-center  items-center gap-8 mt-12 mb-32">
            <CaseStudies
              title={"Toyota North America"}
              desc={"UX optimastion increasing conversion by 30%"}
            />
            <CaseStudies
              title={"SCTE-ISBE"}
              desc={"Systems Architecture using micro-services technology"}
            />
            <CaseStudies
              title={"Toyota North America"}
              desc={"UX optimastion increasing conversion by 30%"}
            />
          </div>
        </div>
        <div className="w-full items-center flex justify-center mb-12">
          <img src="./svgs/footarrow.svg" alt="arrow" />
        </div>
        <div className="w-full items-center flex justify-between">

        <div className="flex  w-full items-start justify-between">
            
          <div className="flex flex-col relative z-10 bottom-1 gap-14">
            <div>
              <h3 className="font-normal text-[40px] leading-tight text-white">
                Are you ready?
              </h3>
              <span className="font-normal text-[40px] text-white leading-tight opacity-30">
                because we are
              </span>
            </div>
            <div className="flex  items-center gap-1">
              <h2 className="text-2xl font-normal cursor-pointer border-b-[1px] border-b-white  text-white">
                Get in touch
              </h2>
              <div className="cursor-pointer">
                <img src="./svgs/footerarrowlast.svg" alt="arrow" />
              </div>
            </div>
            <div>
              <img src="./svgs/Alpha.svg" alt="logo" />
            </div>
          </div>
          <Lastfoot title={"San Diego"} desc={"4275 Executive Square, Suite 200 LA Jolla, CA 92037"} show={true}/>
          <Lastfoot title={"Islamabad"} desc={"Suite 301-305, Ground Floor, NSTP, NUST H-12, Islamabad"} />
          
        </div>
        </div>
        
      </div>
      

    </div>
  );
};

export default Footer;
