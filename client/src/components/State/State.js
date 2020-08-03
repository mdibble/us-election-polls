import React, { useState } from 'react'
import './State.css';

function State(props) {
    const [str, setStr] = useState('No Data');
    const [lean, setLean] = useState('-');
    const [color, setColor] = useState('#777777');
    const [bgColor, setbgColor] = useState('#FFFFFF');

    fetch(`http://localhost:5000/api/polls/states/${props.name}/aggregation`)
        .then(res => res.json())
        .then(data => {
            if (data.data) {
                setStr(data.strength);
                setLean(data.lean);
                if (data.lean === 'D') {
                    setColor('blue');
                    if (data.strength > 15)
                        setbgColor('#c4daff');
                    else if (data.strength > 10)
                        setbgColor('#d4e4ff');
                    else if (data.strength > 5)
                        setbgColor('#e3edff');
                    else
                        setbgColor('#f5f8ff');
                }
                    
                else if (data.lean === 'R') {
                    setColor('red');
                    if (data.strength > 15)
                        setbgColor('#ffc4c4');
                    else if (data.strength > 10)
                        setbgColor('#ffd9d9');
                    else if (data.strength > 5)
                        setbgColor('#ffeded');
                    else
                        setbgColor('#fff7f7');        
                }
            }
        })

    return (
        <div className='state-container' style={{backgroundColor: bgColor}}>
            <div className='state-img-container'>  
                <img src={require('../../img/flags/' + props.abbreviation + '.svg')} alt=''></img>
            </div>
            <div className='state-info-left'>
                <div className='state-name'>
                    <h2>{props.name}</h2>
                </div>
                <span>Voted {props.prevVote} in 2016</span>
                <span>{props.delegates} delegates</span>
            </div>
            <div className='state-info-right'>
                <h2 style={{color: color}}>{lean}</h2>
                <div className='state-percent'>
                    <p>{str}</p>
                </div>
            </div>
        </div>
    );
}

export default State