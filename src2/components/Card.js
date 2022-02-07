import React from 'react';
import Avatar from './Avatar';
import Details from './Details';

const Card = (props) => {
    console.log(props.img);
    return (
        <div className='card'>
            <div className='top'>
                <h2 className='name'>{props.name}</h2>
                <Avatar image={props.img}/>
            </div>
            <div className='bottom'>
                <Details telefon={props.phone} eposta={props.email}/>
            </div>
        </div>
    );
}

export default Card;
