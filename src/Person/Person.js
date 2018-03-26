import React from 'react';
import styles from './Person.css';
import Radium from 'radium';

const person = (props) => {

  const rnd = Math.random();

  if (rnd > 0.7) {
    throw new Error ("it failed.");
  }
  return (
    <div className={styles.Person}>
      <p onClick={props.click}>{props.name} is {props.age} years old.</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default Radium(person);
