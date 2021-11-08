import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import './style.css';

class TodoList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  handleInputChange(e) {
    const value = e.target.value;  //setState中为函数时，方式更换为异步，需如此解决该问题。使用函数可以得到性能提升
    this.setState(() => ({
        inputValue: value
      }))
  }
  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list};
    })
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return(
        <TodoItem 
          key={index} 
          content={item} 
          index={index}
          deleteItem={this.handleItemDelete}
        />
      ) 
    })
  }

  render() {
    return(
      <Fragment>
      <div>
        {/*下面是一个input框*/}
        <label htmlFor="insertArea" >输入内容</label>
        <input 
          id="insertArea"
          className = 'input'
          value = {this.state.inputValue}
          onChange = {this.handleInputChange}
        /> 
        <button onClick = {this.handleBtnClick}>提交</button>
      </div>
      <ul>
        {this.getTodoItem()}
      </ul>
      </Fragment>
    )
  }
}

export default TodoList;