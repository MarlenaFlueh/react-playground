import React from 'react';
import styles from './Person.css';
import Radium from 'radium';

const person = (props) => {

  const style = {
    '@media (min-width: 500px)': {
      width: '450px',
      backgroundColor: 'salmon'
    }
  }

  return (
    <div className={styles.Person} style={style}>
      <p onClick={props.click}>{props.name} is {props.age} years old.</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default Radium(person);
