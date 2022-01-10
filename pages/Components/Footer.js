import React from 'react'
import FotterGallery from './FotterGallery'
import SecondPara from './SecondPara'

const Footer = () => {
    const num = [1,2,3,4]
    return (
        <div className=''>
            <div className='relative bottom-36   z-10 flex flex-col items-center justify-center px-[148px] gap-8'>
                <div className='mb-8'>
                <img src="./svgs/divfoot1.svg" alt="foot-div" />
                </div>
               
            </div>
            <div className='relative  bg-black  w-full flex flex-col  items-center  justify-center  '>
            <div className='flex px-[148px] relative bottom-36 flex-col  gap-8'>
            <div className=''>
                <img src="./svgs/divfoot2.svg" alt="foot-div" />
                </div>
                <div >
                <img src="./svgs/divfoot3.svg" alt="foot-div" />
                </div>
            </div>
            <div className='relative bottom-12 '>
            <SecondPara black={true} title={"The balance of forces."} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor nulla nulla quam pellentesque risus consequat est. Feugiat vulputate sapien enim neque non blandit ullamcorper sit. Eget id augue mi nisi quam turpis morbi. "} />
            </div>
            <div className='flex gap-8 px-[148px] mb-24'>
            <FotterGallery src1={"./svgs/footergallery1.svg"} src2={"./svgs/footerframe2.svg"} />
            <FotterGallery src1={"./svgs/footerframe2.svg"} src2={"./svgs/footergallery1.svg"} />
            </div>
            </div >
            <div className='bg-black px-[148px] flex flex-col items-start'>
                <SecondPara title={"Very soflty."} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor nulla nulla quam pellentesque risus consequat est. Feugiat vulputate sapien enim neque non blandit ullamcorper sit. Eget id augue mi nisi quam turpis morbi. "} black={true}/>
                <div className='flex gap-8 my-24'>
                    {num.map((num,index)=>{
                        return  ( <div >
                        <img src="./svgs/Footsecondframe.svg" key={num} alt="footer-div" />
                    </div>)
                    })}
              
               
                </div>
            </div>

        </div>
    )
}

export default Footer
