import React, { useState } from 'react';
import './AddPoll.css';
import Poll from '../Poll/Poll';

function AddPoll() {
    const [state, setState] = useState('Alabama');
    const [lean, setLean] = useState('D');
    const [strength, setStrength] = useState(0);
    const [org, setOrg] = useState('Organization');
    const [date, setDate] = useState('2020-01-01');

    const onStateChange = (e) => {
        setState(e.target.value);
    }

    const onLeanChange = (e) => {
        setLean(e.target.value);
    }

    const onStrengthChange = (e) => {
        setStrength(e.target.value);
    }

    const onOrgChange = (e) => {
        setOrg(e.target.value);
    }

    const onDateChange = (e) => {
        setDate(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const newPoll = {
            state: state,
            lean: lean,
            strength: strength,
            org: org,
            date: date,
        }

        fetch('http://localhost:5000/api/polls/add', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newPoll)
        });
    }

    return (
        <div className="add-poll">
            <h1>Add a Poll</h1>
            <form onSubmit={onSubmit}>
                <label>State</label>
                <select onChange={onStateChange}>
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
                <select onChange={onLeanChange}>
                    <option value="D">Democratic</option>
                    <option value="N">Neutral</option>
                    <option value="R">Republican</option>
                </select>
                <br/>
                <label>Strength</label>
                <input type="number" placeholder="Number" onChange={onStrengthChange}></input>
                <br/>
                <label>Organization</label>
                <input type="text" placeholder="Pollster, Inc." onChange={onOrgChange}></input>
                <br/>
                <label>Date</label>
                <input type="date" onChange={onDateChange}></input>
                <br/>
                <button type="submit">Add Poll</button>
            </form>
            <Poll state={state} lean={lean} str={strength} date={date} org={org}/>
        </div>
    )
}

export default AddPoll;