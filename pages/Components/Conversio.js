import React from 'react'

const Conversio = ({title,desc}) => {
    return (
        <div className='flex flex-col items-center justify-center'>
        <h1 className='font-normal text-[80px] text-[#111827]'>{title}</h1>
        <p className='font-normal text-lg text-[#111827]'>{desc}</p>
    </div>
    )
}

export default Conversio
