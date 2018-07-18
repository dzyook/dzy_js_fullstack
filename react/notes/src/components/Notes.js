import React, { Component } from 'react';
import { db, loadCollection} from '../database'
import Note from './Note'
class Notes extends Component {
  // state vue data
  constructor (props) {
    super (props)
    this.getInitialData()
  }
  getInitialData () {
    loadCollection('notes')
      .then(collection => {
        // console.log(collection)
        // collection.insert([
        //   {
        //     text: 'hello ~'
        //   },
        //   {
        //     text: 'hola ~'
        //   }
        // ]);
        // db.saveDatabase();
        const entities = collection.chain()
          .find()
          .simplesort('$loki', 'isdesc')
          .data()
          // console.log(entities)
          this.setState({
            entities
          })
      })
  }
  state = {
    entities: [
    ]
  }
  createEntry () {
    loadCollection('notes')
    .then((collection) => {
      const entity = collection.insert({
        text: ''
      })
      db.saveDatabase();
      this.setState((prevState) => {
        const _entities = prevState.entities
        _entities.unshift(entity);
        return {
          entities: _entities
        }
      })
    })
  }
  destoryEntity (entity) {
    // console.log(value)
    // const index = this.state.entities.indexOf(value)
    // if(index >-1){
    // this.state.entities.splice(index,1)
    // this.setState({
    //   entities:  this.state.entities
    // })}
    // console.log(this.state.entities)
    console.log(this)
    const _entities = this.state.entities.filter((_entity) => {
      return _entity.$loki !== entity.$loki
    })
    this.setState({
      entities : _entities
    })
    loadCollection('notes').then((collection) => {
      collection.remove(entity)
      db.saveDatabase()
    })
  }
  render() {
    // react 独有的JSX 模板引擎
    // js 里直接写html 
    // react className
    // html js node 是会被编译成为js的 class 是一个关键字
    const entities = this.state.entities
    const noteItems = entities.map((entity) =>
      <Note
      key={ entity.$loki }
      entity={entity}
      destoryEntity={ this.destoryEntity.bind(this)}
      />
    )
    return (
      <div className="ui container notes">
        <h4 className="ui horizontal divider header">
        <i className="paw icon"></i>
        helloworld
        </h4>
        <button className="ui right floated basic violet button" onClick={ this.createEntry.bind(this) }>
        添加笔记
        </button>
        <div className="ui divided items">
          {!entities.length && <span className="ui small disabled header">还没有笔记, 请先添加</span>}
          {entities.length && noteItems}
            
        </div>
      </div>
    );
  }
}

export default Notes;