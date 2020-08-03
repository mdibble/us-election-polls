import React, { useState } from 'react';
import './DeletePoll.css';
import Polls from '../Polls/Polls';

function DeletePoll() {
    const [id, setId] = useState();

    const handleChange = (e) => {
        setId(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/api/polls/delete/${id}`, {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        });
    }

    return (
        <div className="delete-poll">
            <h1>Delete a Poll</h1>
            <form onSubmit={handleSubmit}>
                <label>Poll ID</label>
                <input type="text" onChange={handleChange}></input>
                <button type="submit">Delete</button>
            </form>
            <Polls showId='true'/>
        </div>
    )
}

export default DeletePoll;