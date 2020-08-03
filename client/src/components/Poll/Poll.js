import React from 'react';
import './Poll.css';

function Poll(props) {
    const date = new Date(props.date);

    var color = 'grey';
    if (props.lean === 'D')
        color = 'blue';
    else if (props.lean === 'R')
        color = 'red';

    const id = (props.showId === 'true') ? props.id : '';

    return (
        <div className="poll-container">
            <div className="poll-info-left">
                <h2>{props.state}</h2>
                <p>{props.org}</p>
                <p>{date.toDateString()}</p>
            </div>
            <div className="poll-info-right">
                <h3 style={{color: color}}>{props.lean}</h3>
                <p>+{props.str}%</p>
            </div>
            <div className="id-container">
                <span>{id}</span>
            </div>
        </div>
    )
}

export default Poll;