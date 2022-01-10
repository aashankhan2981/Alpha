import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='relative  z-10 flex flex-col items-center justify-center px-[148px] gap-8'>
                <div>
                <img src="./svgs/divfoot1.svg" alt="foot-div" />
                </div>
                <div>
                <img src="./svgs/divfoot2.svg" alt="foot-div" />
                </div>
                <div>
                <img src="./svgs/divfoot3.svg" alt="foot-div" />
                </div>
            </div>
            <div className='absolute bg-black h-screen  '>
            {/* <div className='mx-[148px] '>
                <img src="./svgs/divfoot3.svg" alt="foot-div" />
                
                </div> */}
            </div>
        </div>
    )
}

export default Footer
