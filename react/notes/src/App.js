import React, { Component } from 'react';
import Notes from './components/Notes'
import 'semantic-ui-css/semantic.min.css'
import './App.css';//style

// .vue 三部分 template js style
// react .js 组件类 继承 template? jsx 语法 render
class App extends Component {
  render() {
    return (
      <Notes/>
    );
  }
}

export default App;
