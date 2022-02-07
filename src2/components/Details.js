import React from 'react';

const Details = (props) => {
    return (
        <div>
            <p className='info'>{props.telefon}</p>
            <p className='info'>{props.eposta}</p>
        </div>
    );
}

export default Details;
