import React, { Component } from "react";
import * as api from "../api";
import {Link} from "@reach/router";

class Student extends Component {
  state = {
    student: {},
  };
  componentDidMount(props) {
    api
      .fetchStudent(this.props.studentId)
      .then(({ student }) => {
        this.setState({ student });
      })
      .catch(console.error);
  }

  render() {
    const { student } = this.state;
    return (
    <>
      <p>{student.name}</p>
      <p>{student._id}</p>
      <button><Link to={`/`}>Back</Link></button>
  </>
    )
  }
}

export default Student;
