import React, { useState, useEffect } from 'react';
import Poll from '../Poll/Poll';
import './Polls.css';

function Polls(props) {
    const [polls, setPolls] = useState([]);
    const [showId] = useState(props.showId === 'true' ? 'true' : 'false');

    useEffect(() => {
        fetch('http://localhost:5000/api/polls')
            .then(res => res.json())
            .then(res => setPolls(res))
    })

    const mappedPolls = polls.map((poll) => (
        <div key={poll._id}>
            <Poll id={poll._id} state={poll.state} lean={poll.lean} str={poll.strength} org={poll.org} date={poll.date} showId={showId}/>
        </div>
    ));

    return (
        <div className='polls-container'>
            <h1>Polls</h1>
            <div className='polls-flex'>
                { mappedPolls } 
            </div>
        </div>
    )
}

export default Polls
