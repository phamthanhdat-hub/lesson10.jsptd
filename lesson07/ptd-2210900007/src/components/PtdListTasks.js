import React, { Component } from 'react';

class PtdListTasks extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <div>
        <h2>List of Tasks</h2>
        <table>
          <thead>
            <tr>
              <th>Task ID</th>
              <th>Task Name</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.ptd_taskId}>
                <td>{task.ptd_taskId}</td>
                <td>{task.ptd_taskName}</td>
                <td>{task.ptd_level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PtdListTasks;