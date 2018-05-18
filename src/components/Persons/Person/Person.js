import React, { Component } from "react";
import withClass from "../../../hoc/withClass";
import Aut from "../../../hoc/Aut";
import styles from "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside constructor.", props);
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount.");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount.");
  }

  render() {
    console.log("[Person.js] Inside render.");
    return (
      <Aut>
        <p onClick={this.props.click}>
          {this.props.name} is {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aut>
    );
  }
}

export default withClass(Person, styles.Person);
