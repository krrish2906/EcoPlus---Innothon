import React from 'react'

function Report({ report, title, desc, image }) {
    return (
        <div className='flex justify-between items-start bg-white p-4 rounded-lg shadow-sm'>
            <div className='flex-1 pr-4'>
                <p className='text-sm text-gray-500'>{ report }</p>
                <h1 className='font-semibold text-lg'>{ title }</h1>
                <p className='text-gray-600 text-sm mt-1'>{ desc }</p>
            </div>
            <div className='w-36 h-24 shrink-0'>
                <img src={image} className='w-full h-full object-cover rounded-md' />
            </div>
        </div>
    )
}

export default Report;