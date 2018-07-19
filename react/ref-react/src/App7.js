import React, { Component } from 'react';
import './App.css';

class Hello extends Component {
  state = {
    opacity: 1
  }
  componentDidMount (){//在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。
    this.timer = setInterval(() => {
      var opacity = this.state.opacity;
      if (opacity >=0.1) opacity -= .05;
      if (opacity < 0.1) opacity += .05;
      this.setState({
        opacity: opacity
      });
    }, 100);
  }
  render () {
    return (// React 组件样式是一个对象，所以第一重大括号表示这是 JavaScript 语法，第二重大括号表示样式对象
      <div style={{opacity: this.state.opacity}}>Hello {this.props.name}</div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <Hello name="world"/>
      </div>
    );
  }
}

export default App;
