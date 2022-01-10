import React from 'react'

const FotterGallery = ({src1,src2}) => {
    return (
        <div className='flex  gap-8 flex-col'>
                    <div>
                     <img src={src1}  className='' alt="div" />
                    </div>
                    <div>
                    <img src={src2} className='' alt="div" />

                    </div>
                    </div>
    )
}

export default FotterGallery
