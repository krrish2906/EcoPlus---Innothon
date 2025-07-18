import React from 'react'

function Card({ day, title, desc, image }) {
    return (
        <div className='flex'>
            <div>
                <p>{ day }</p>
                <h1>{ title }</h1>
                <p>{ desc }</p>
            </div>
            <div>
                <img
                    src={image}
                />
            </div>
        </div>
    )
}

export default Card;