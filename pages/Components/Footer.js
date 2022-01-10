import React from 'react'
import SecondPara from './SecondPara'

const Footer = () => {
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
            <div className='relative bottom-12 mb-20'>
            <SecondPara black={true} title={"The balance of forces."} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor nulla nulla quam pellentesque risus consequat est. Feugiat vulputate sapien enim neque non blandit ullamcorper sit. Eget id augue mi nisi quam turpis morbi. "} />
            </div>
            <div className='flex gap-8 px-[148px] mb-24'>
                <div className='flex  gap-8 flex-col'>
                    <div>
                     <img src="./svgs/footergallery1.svg"  className='' alt="div" />
                    </div>
                    <div>
                    <img src="./svgs/footerframe2.svg" className='' alt="div" />

                    </div>
                </div>
                <div className='flex gap-8 flex-col'>
                    <div>
                    <img src="./svgs/footerframe2.svg" alt="div" />

                    </div>
                    <div>
                    <img src="./svgs/footergallery1.svg" alt="div" />

                    </div>


                </div>

            </div>
            </div>
        </div>
    )
}

export default Footer
