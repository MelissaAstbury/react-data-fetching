import React, { Component } from 'react';
import * as api from '../../api';
import { Link } from '@reach/router';
import Filter from '../Filter/Filter';

import './StudentList.css';

class AllStudents extends Component {
  state = {
    students: [],
    chosenBlock: 'grad',
    chosenOption: false,
  };

  componentDidMount() {
    api
      .fetchAllStudents()
      .then(({ students }) => {
        this.setState({ students });
      })
      .catch(console.error);
  }

  filterByBlock = (chosenBlock) => {
    this.setState({ chosenBlock: chosenBlock, chosenOption: true });
  };

  render() {
    const { students } = this.state;
    return (
      <>
        <Filter filterByBlock={this.filterByBlock} />
        <ul className="student-list">
          {this.state.chosenOption
            ? students.map((student) => {
                if (student.currentBlock === this.state.chosenBlock) {
                  return (
                    <li className="student" key={student._id}>
                      <Link to={`/${student._id}`}>
                        <p>{student.name}</p>
                      </Link>
                      <p>{student.currentBlock}</p>
                    </li>
                  );
                } else if (this.state.chosenBlock === 'all') {
                  console.log('here');
                  return (
                    <li className="student" key={student._id}>
                      <Link to={`/${student._id}`}>
                        <p>{student.name}</p>
                      </Link>
                      <p>{student.currentBlock}</p>
                    </li>
                  );
                } else {
                  console.log('bottom');
                }
              })
            : students.map((student) => {
                return (
                  <li className="student" key={student._id}>
                    <Link to={`/${student._id}`}>
                      <p>{student.name}</p>
                    </Link>
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
