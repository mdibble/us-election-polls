import React, { useState } from 'react';
import './EditPoll.css';
import Polls from '../Polls/Polls';

function EditPoll() {
    const [id, setId] = useState();
    const [state, setState] = useState();
    const [lean, setLean] = useState();
    const [strength, setStrength] = useState();
    const [org, setOrg] = useState();
    const [date, setDate] = useState();

    const handleIdChange = (e) => {
        fetch (`http://localhost:5000/api/polls/${e.target.value}`) 
            .then(res => res.json())
            .then(data => {
                setId(data._id)
                setState(data.state)
                setLean(data.lean)
                setStrength(data.strength)
                setOrg(data.org)
                setDate(data.date)
                document.getElementById('state-change').value = data.state
                document.getElementById('lean-change').value = data.lean
                document.getElementById('strength-change').value = data.strength
                document.getElementById('org-change').value = data.org
                document.getElementById('date-change').value = data.date
            })
    }

    const handleStateChange = (e) => {
        setState(e.target.value);
    }

    const handleLeanChange = (e) => {
        setLean(e.target.value);
    }

    const handleStrengthChange = (e) => {
        setStrength(e.target.value);
    }

    const handleOrgChange = (e) => {
        setOrg(e.target.value);
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedPoll = {
            state: state,
            lean: lean,
            strength: strength,
            org: org,
            date: date,
        }

        console.log(updatedPoll);
        fetch(`http://localhost:5000/api/polls/edit/${id}`, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedPoll)
        });
    }

    return (
        <div className="edit-poll">
            <h1>Edit a Poll</h1>
            <form onSubmit={handleSubmit}>
                <label>Poll ID</label>
                <input type="text" onChange={handleIdChange}></input>
                <br/>
                <label>State</label>
                <select onChange={handleStateChange} id='state-change'>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Iowa">Iowa</option>
                    <option value="Kansas">Kansas</option>
                    <option value="Kentucky">Kentucky</option>
                    <option value="Louisiana">Louisiana</option>
                    <option value="Maine">Maine</option>
                    <option value="Maryland">Maryland</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="Michigan">Michigan</option>
                    <option value="Minnesota">Minnesota</option>
                    <option value="Mississippi">Mississippi</option>
                    <option value="Missouri">Missouri</option>
                    <option value="Montana">Montana</option>
                    <option value="Nebraska">Nebraska</option>
                    <option value="Nevada">Nevada</option>
                    <option value="New Hampshire">New Hampshire</option>
                    <option value="New Jersey">New Jersey</option>
                    <option value="New Mexico">New Mexico</option>
                    <option value="New York">New York</option>
                    <option value="North Carolina">North Carolina</option>
                    <option value="North Dakota">North Dakota</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Oklahoma">Oklahoma</option>
                    <option value="Oregon">Oregon</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Rhode Island">Rhode Island</option>
                    <option value="South Carolina">South Carolina</option>
                    <option value="South Dakota">South Dakota</option>
                    <option value="Tennessee">Tennessee</option>
                    <option value="Texas">Texas</option>
                    <option value="Utah">Utah</option>
                    <option value="Vermont">Vermont</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Washington">Washington</option>
                    <option value="West Virginia">West Virginia</option>
                    <option value="Wisconsin">Wisconsin</option>
                    <option value="Wyoming">Wyoming</option>
                    <option value="District of Columbia">District of Columbia</option>
                </select>
                <br/>
                <label>Lean</label>
                <select onChange={handleLeanChange} id='lean-change'>
                    <option value="D">Democratic</option>
                    <option value="N">Neutral</option>
                    <option value="R">Republican</option>
                </select>
                <br/>
                <label>Strength</label>
                <input type="number" placeholder="Number" onChange={handleStrengthChange} id='strength-change'></input>
                <br/>
                <label>Organization</label>
                <input type="text" placeholder="Pollster, Inc." onChange={handleOrgChange} id='org-change'></input>
                <br/>
                <label>Date</label>
                <input type="date" onChange={handleDateChange} id='date-change'></input>
                <br/>
                <button type="submit">Edit Poll</button>
            </form>
            <Polls showId='true'/>
        </div>
    )
}

export default EditPoll;