import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    value: 'Hello!'
  }
  handleChange (e) {
    console.log(this)
    this.setState({
      value: e.target.value
    })
  }
  render() {
    const value = this.state.value
    return (
      <div className="App">
        <div>
          <input type="text" value={value} onChange={this.handleChange.bind(this)} />
          <p>{value}</p>
        </div>
      </div>
    );
  }
}

export default App;
