import React, { Component } from 'react';
import HelloMessage from './components/HelloMessage'
import './App.css';

class App extends Component {
  render() {
    const names = ['Alice','Emily','赵乐乐小兵']
    const arr = [
      <h1 key="1">Hello World</h1>,
      <h2 key="2">React is awesome</h2>
    ]
    return (
      <div className="App">
      <HelloMessage name="John" />
      <ul>
        {
          names.map((name,index)=>{
            return (<div key={index}>{name}</div>)
          })
        }
       {arr}
      </ul>
      </div>
    );
  }
}

export default App;
