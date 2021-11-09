import React from 'react';

const Member = ({ details }) => {
    if (!details) {
        return <h3>Retrieving info...</h3>
    }

    return (
        <div className='member container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}

export default Member;