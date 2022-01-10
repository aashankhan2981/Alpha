import React from 'react'

const SecondPara = ({title,desc,black}) => {
    return (
        <div className={`  flex  flex-col ${black?"text-white":"text-[#111827] my-24"}  items-start justify-center`}>
        <h1 className={`text-5xl font-medium mb-8 ${black?"text-[#D1D5DB]":"text-[#111827]"} `}>{title}</h1>
        <p className='max-w-[600px]'>{desc}</p>

    </div>
    )
}

export default SecondPara
