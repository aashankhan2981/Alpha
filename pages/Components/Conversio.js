import React from 'react'

const Conversio = ({title,desc}) => {
    return (
        <div className='flex flex-col items-center justify-center'>
        <h1 className='font-normal lg:text-4xl text-xl md:text-2xl nine:text-3xl xl:text-5xl 2xl:text-[80px] text-[#111827]'>{title}</h1>
        <p className='font-normal text- nine:text-base 2xl:mt-0 mt-2 2xl:text-lg text-[#111827]'>{desc}</p>
    </div>
    )
}

export default Conversio
