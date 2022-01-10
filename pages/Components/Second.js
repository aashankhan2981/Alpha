import React from 'react'
import Conversio from './Conversio'
import Footer from './Footer'
import SecondPara from './SecondPara'

const Second = () => {
    return (
        <div className='relative z-10 flex flex-col items-center justify-center' >
            <div className='mb-20'>
            <p className="mt-10 font-medium text-[#111827] text-xl">Visit Website</p>
            <img src="./svgs/border.svg" alt="border" className='mt-1 ' />
            </div>
            <div className='mx-[148px]'>
                <img src="./svgs/div2.svg" alt="container" />
            </div>
            <div className='flex justify-center gap-28 mt-24 items-center'>
            
            <Conversio title={"+1.37%"} desc={"Conversation ratio"} />
            <Conversio title={"10,000+"} desc={"Conversation ratio"} />
            <Conversio title={"4 min"} desc={"Conversation ratio"} />
            
            </div>
            
            <SecondPara title={"An asserted identity."} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor nulla nulla quam pellentesque risus consequat est. Feugiat vulputate sapien enim neque non blandit ullamcorper sit. Eget id augue mi nisi quam turpis morbi."}/>
            <div className='flex mx-[148px]   justify-center items-center gap-3'>
                <div>
                <img src="./svgs/div3.svg" alt="div" />
                </div>
                <div>
                <img src="./svgs/div3.svg" alt="div" />
                </div>
            </div>
            <SecondPara title={"The future of management."} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor nulla nulla quam pellentesque risus consequat est. Feugiat vulputate sapien enim neque non blandit ullamcorper sit. Eget id augue mi nisi quam turpis morbi. "}/>
            <div className='mt-28'>
            <Footer/>

            </div>
        </div>
    )
}

export default Second
