import React from 'react';

function Inputs(props) {
    return (
        <div>
            <label>{props.label}</label>
            <input value={props.value} />
        </div>
    )
}

export default Inputs;