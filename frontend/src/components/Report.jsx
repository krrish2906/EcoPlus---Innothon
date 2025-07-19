import React from 'react'

function Report({ report, title, desc, image }) {
    return (
        <div className='flex'>
            <div>
                <p>{ report }</p>
                <h1>{ title }</h1>
                <p>{ desc }</p>
            </div>
            <div>
                <img src={image} />
            </div>
        </div>
    )
}

export default Report;