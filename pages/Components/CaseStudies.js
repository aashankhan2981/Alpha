import React from 'react'

const CaseStudies = ({title,desc}) => {
    return (
        <div className='flex items-center justify-center flex-col gap-8'>
        <img src="./svgs/CaseStudy.svg" alt="case-study" />
        <div className='flex flex-col items-start justify-center gap-7 max-w-[520px]'>
            <h5 className='font-medium text-[#D1D5DB] text-2xl' >{title}</h5>
            <h3 className='font-medium text-4xl text-white'>{desc}</h3>
            <span className='font-medium max-w-[155px] cursor-pointer text-center pb-1 text-xl text-[#D1D5DB] border-b-2 border-white'>View Case Study</span>
        </div>
        </div>
    )
}

export default CaseStudies
