import React from 'react';
import './Card.css'

const Card = ({name, id, email}) => {
    return (
        <div className='dib body'>
        <div className='tc bg-light-green dib br4 pa4 ma3 grow bw2 shadow-2'>
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"/>
            <img src={`https://robohash.org/${id}?200x200`} alt=""/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        </div>
    )
}

export default Card;