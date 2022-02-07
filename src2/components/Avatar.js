import React from 'react';

const Avatar = (props) => {
    return (
        <div>
            <img className='circle-img' src={props.image} alt="baslik" />
        </div>
    );
}

export default Avatar;
