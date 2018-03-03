import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>{props.name} is {props.age} years old.</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default person;
