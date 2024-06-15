import React, { Component } from 'react';

class PtdTaskAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ptd_taskName: '',
      ptd_level: ''
    };
  }

  PtdhandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  PtdhandleSubmit = (e) => {
    e.preventDefault();
    const { ptd_taskName, ptd_level } = this.state;
    const newTask = {
      ptd_taskId: Date.now(),
      ptd_taskName,
      ptd_level
    };
    this.props.addTask(newTask);
    this.setState({ ptd_taskName: '', ptd_level: '' });
  };

  render() {
    const { ptd_taskName, ptd_level } = this.state;
    return (
      <div>
        <h2>Add New Task</h2>
        <form onSubmit={this.PtdhandleSubmit}>
          <div>
            <label>Task Name:</label>
            <input
              type="text"
              name="ptd_taskName"
              value={ptd_taskName}
              onChange={this.PtdhandleChange}
            />
          </div>
          <div>
            <label>Level:</label>
            <input
              type="text"
              name="ptd_level"
              value={ptd_level}
              onChange={this.PtdhandleChange}
            />
          </div>
          <button type="submit">Add Task</button>
        </form>
      </div>
    );
  }
}

export default PtdTaskAdd;