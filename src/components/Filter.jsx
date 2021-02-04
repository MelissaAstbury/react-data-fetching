import React, { Component } from 'react'

 class Filter extends Component {
     state = {
         block: ["graduate", "front-end", "backend", "fundamentals", "project"]
     }

     handleSubmit = (event) => {
        console.log(event)
     }

     handleChange = (event) => {
         console.log(event.target.value)
     }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Student Block</label>
                <select onChange={this.handleChange}>
                    {this.state.block.map((item) => {
                        return <option key={item} value={item}>{item}</option>
                    })}
                </select>
                <button type="submit">Search</button>
            </form>
        )
    }
};

export default Filter;
