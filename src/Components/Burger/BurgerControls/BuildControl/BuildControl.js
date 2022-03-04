import React from 'react';
import './BuildControl.module.css'

const BuilControl = (props) => (
    <div className = 'BuildControl'>
        <div className= 'Label'>{props.label}</div>
        <button className = 'Less'>Less</button>
        <button className = 'More'>More</button>
    </div>
)