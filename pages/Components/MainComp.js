import React from 'react'

const MainComp = ({title,desc}) => {
    return (
        <div className='text-center mini:text-left'>
                <h4 className="font-medium text-xl md:text-lg xl:text-xl 2xl:text-2xl text-[#111827]">{title}</h4>
                <p className="font-normal  text-xs sm:text-base md:text-sm nine:text-base 2xl:text-lg text-[#4B5563]">{desc}</p>
            </div>
    )
}

export default MainComp
