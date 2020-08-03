import React, { useEffect } from 'react';
import State from '../State/State';
import stateInfo from '../../data/states.json';

function States() {
    var states = stateInfo.map((state) => (
        <div key={state.abbreviation}>
            <State name={state.name} prevVote={state.prevVote} abbreviation={state.abbreviation} delegates={state.delegates}/>
        </div>
    ));

    return (
        <div>
            <h1>States</h1>
            { states }
        </div>
    )
}

export default States;