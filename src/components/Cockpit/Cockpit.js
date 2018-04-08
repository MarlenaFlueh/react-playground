import React from 'react';
import styles from './Cockpit.css';
import Aut from '../../hoc/Aut';

const cockpit = (props) => {

  const classes = [];
  let btnClass = styles.Button;

  if (props.showPersons) {
    btnClass = [styles.Button, styles.Red].join(' ');
  }

  if (props.persons.length <= 2) {
    classes.push(styles.red);
  } 
  
  if (props.persons.length <= 1) {
    classes.push(styles.bold);
  }

  return (
    <Aut>
      <h1>Hi, i'm a react app</h1>
      <p className={classes.join(' ')}>This is working.</p>
      <button 
        className={btnClass}
        onClick={props.click}>Switch me
      </button>
    </Aut>
  )
};

export default cockpit;
