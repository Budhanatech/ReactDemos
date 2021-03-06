import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick = {props.click}>I am {props.name} and my age is {props.age}</p> 
            {props.children}
        </div>
    )
}

export default person;