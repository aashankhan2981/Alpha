import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between items-center pl-6 pt-10 pr-[7%]'>
            <div><img src="./svgs/logo.svg" alt="logo" /></div>
            <div className='flex justify-center items-center gap-1'>
                <h2 className='text-base font-normal border-b-[1px] border-b-[#111827]  text-[#111827]'>Get in touch</h2>
                <img src="./svgs/Headarrow.svg" alt="arrow" />
            </div>
        </div>
    )
}

export default Header
