import React from 'react';

const Quote = ({ cita }) => {
    return (
        <div>
            <p><i>{cita.quote}</i></p>
            <p>{cita.author}</p>
        </div>
    );
}

export default Quote;
