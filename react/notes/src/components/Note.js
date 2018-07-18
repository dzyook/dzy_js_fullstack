import React, { Component } from 'react'
import moment from 'moment'
import 'moment/locale/zh-cn'
import _ from 'loadsh'
moment.locale('zh-CN')

class Note extends Component {
//   constructor(props) {
//     super(props); 
//       this.state = {
//     entity: this.props.entity,
//     text: this.props.entity.text,
//     open: false,
//     updated: this.props.entity.meta.updated || this.props.entity.meta.created,
//     destoryEntity: this.props.destoryEntity
//   }
// }
state = {
  entity: this.props.entity,
  text: this.props.entity.text,
  open: false,
  updated: this.props.entity.meta.updated || this.props.entity.meta.created,
  destoryEntity: this.props.destoryEntity
}
  
  componentWillReceiveProps(props) {
    console.log(props.entity)
    this.setState({
      entity: props.entity,
      text: props.entity.text
    });
    // console.log(this.state.entity)
  }
  updated () {
    return moment(this.state.updated).fromNow()
  }
  header () {
    return _.truncate(this.state.text, { length:30 }) || '新建笔记'
  }
  toggle () {
   this.setState((prevState) => {
     return {
       open: !prevState.open
     }
   })
   console.log(this.state.open)
  }
  words () {
    return this.state.text.length
  }
  render () {

    return (
      <div className="item">
      <div className="meta">
        { this.updated() }
      </div>
      <div className="content">
        <div className="header" onClick={this.toggle.bind(this)}>
        { this.header() }
        </div>
        <div className="extra">
         { this.words() }字
        </div>
      </div>
        {this.state.open && <i className="right floated trash online icon" onClick={() => this.state.destoryEntity(this.state.entity)}></i>}
      </div>
    )
  }
}

export default Note