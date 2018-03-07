import React, { Component } from 'react';
import ListItem from './ListItem';
import logo from './logo.svg';
import './App.css';

class MyList extends Component {
  constructor(props) {
    super()
    this.state = {
      toDoItemArray: [],
      currentItem: '',
    }
  }
  componentDidMount(){
    this.textInput.focus();
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      currentItem: e.target.value
    })
  }
  addItem = (e) => {
    e.preventDefault()
    // checking if currentItem has text
      if (this.state.currentItem){
      //create a copy
      let toDoItemArrayCopy = Array.from(this.state.toDoItemArray)
      // push item to copy
      toDoItemArrayCopy.push(this.state.currentItem)
      // update state with copy
      this.setState({
        toDoItemArray: toDoItemArrayCopy,
        currentItem: ''
      })
    }
      this.textInput.focus();


  }

  deleteItem = (e, index) => {
  let toDoItemArrayCopy = Array.from(this.state.toDoItemArray)
  toDoItemArrayCopy.splice(index, 1)
  this.setState({
    toDoItemArray: toDoItemArrayCopy
  })
  }


  clearList = (e) => {
    e.preventDefault()
    this.setState({
      toDoItemArray: []
    })
  }
  render() {
    console.log(this.state.toDoItemArray, typeof this.state.toDoItemArray)
    let jsxToDos = this.state.toDoItemArray.map(
      (listItem, index) => {
       return (<ListItem
       key={index}
       doThis={listItem}
       deleteItem={(e) => this.deleteItem(e, index)} />)
    })

    return (
      <div className="App">
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {jsxToDos}
        </ul>
        <input type='text'
        ref={el => {
          this.textInput = el;
        }}
        value={this.state.currentItem} onChange={this.handleChange} />
        <br />
        <button onClick={this.addItem}>Add Item</button>
        <br />
        <button onClick={(e) => this.clearList(e)}>Finish the List</button>
      </div>
    );
  }
}

export default MyList;
