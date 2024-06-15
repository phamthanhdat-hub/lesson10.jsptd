import React, { Component } from 'react';
import PtdListTasks from './components/PtdListTasks';
import PtdTaskAdd from './components/PtdTaskAdd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          PTD_taskId: 1,
          PTD_taskName: "Học lập trình frontend",
          PTD_level: "Small"
        },
        {
          PTD_taskId: 2,
          PTD_taskName: "Học lập trình reactjs",
          PTD_level: "Medium"
        },
        {
          PTD_taskId: 3,
          PTD_taskName: "Lập trình với Frontend - Reactjs",
          PTD_level: "High"
        },
        {
          PTD_taskId: 4,
          PTD_taskName: "Lập trình Fullstack (PHP, Java, NetCore)",
          PTD_level: "Small"
        },
      ]
    };
  }

  PtdHandleSubmit = (param) => {
    let { products } = this.state;
    products.push(param);
    this.setState({
      products: products
    });
  };

  render() {
    return (
      <div className='container border mt-5'>
        <h1>Pham Thanh Dat-2210900007</h1>
        <hr />
        <PtdListTasks renderProducts={this.state.products} />
        <hr />
        <PtdTaskAdd onSubmit={this.PtdHandleSubmit} />
      </div>
    );
  }
}

export default App;
