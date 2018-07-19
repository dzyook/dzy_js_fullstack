import React, { Component } from 'react';
import './App.css';

class LikeButton extends Component {
  state = {
    liked: false
  }
  handleClick () {
    console.log(this.state.liked)
    this.setState({
      liked:!this.state.liked
    })
    
  }
  render () {
    var text = this.state.liked? 'like':'dislike'
    return (
      <p onClick={()=> this.handleClick()}>
        You {text} this.click to toggle
      </p>
    )
  }
}

class App extends Component {
  handleClick () {
    this.refs.myTextInput.focus()
  }
  render() {
    return (
      <div className="App">
      <LikeButton/>
      <input type="text" ref="myTextInput"/>
      <input type="button" value="Focus the text input" onClick={this.handleClick.bind(this)} />
      </div>
    );
  }
}

export default App;
