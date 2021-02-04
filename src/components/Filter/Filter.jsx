import React, { Component } from 'react';

class Filter extends Component {
  state = {
    block: ['all', 'grad', 'fe', 'be', 'fun', 'proj'],
  };

  handleChange = (event) => {
    this.props.filterByBlock(event.target.value);
  };

  render() {
    return (
      <form>
        <label>Student Block</label>
        <select onChange={this.handleChange}>
          {this.state.block.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </form>
    );
  }
}

export default Filter;
