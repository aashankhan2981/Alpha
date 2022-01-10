import React from 'react'

const SecondPara = ({title,desc}) => {
    return (
        <div className='mt-24  flex flex-col mb-24 items-start justify-center'>
        <h1 className='text-5xl font-medium mb-8 text-[#111827]'>{title}</h1>
        <p className='max-w-[600px]'>{desc}</p>

    </div>
    )
}

export default SecondPara
