import React, { Component } from "react";
import * as api from "../api";
import {Link} from "@reach/router";
import Filter from "./Filter";

import "./AllStudents.css"

class AllStudents extends Component {
  state = {
    students: [],
  };

  componentDidMount() {
    api
      .fetchAllStudents()
      .then(({ students }) => {
        console.log(students);
        this.setState({ students });
      })
      .catch(console.error);
  }

  render() {
    const { students } = this.state;
    return (
      <>
      <Filter />
      <ul className="student-list">
        {students.map((student) => {
          return (
          <li className="student" key={student._id}>
            <Link to={`/${student._id}`}>
              <p>{student.name}</p></Link>
              <p>{student.currentBlock}</p>
              
            </li>
          );
        })}
      </ul>
      </>
    );
  }
}

export default AllStudents;
