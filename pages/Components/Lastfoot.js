import React from "react";

const Lastfoot = ({title,desc,show}) => {
  return (
    <div className="flex  justify-center flex-col font-medium text-lg text-gray-400 gap-5 ">
      <h3 className="font-medium text-xl text-white">{title}</h3>
      <p className="max-w-[340px]">{desc}</p>
      <div className={`${show?"flex":"hidden"} relative top-28  justify-start gap-8 items-center`}>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Lastfoot;
