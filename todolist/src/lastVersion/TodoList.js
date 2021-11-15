import React, { Component } from "react";
import 'antd/dist/antd.css';
import axios from 'axios'
import store from './store/';
import { getInputChangeAction, getInitList, getAddItemAction, getDeleteItemAction, initListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }

    componentDidMount() {
        // const action = getTodoList();
        // store.dispatch(action);
        const action = getInitList();
        store.dispatch(action);
        // axios.get('/list.json').then((res) => {
        //     const data = res.data;
        //     const action = initListAction(data);
        //     store.dispatch(action);
        // })
    }

    render() {
        return (
            <TodoListUI 
                inputValue= {this.state.inputValue}
                list = {this.state.list}
                handleInputChange= {this.handleInputChange}
                handleBtnClick = {this.handleBtnClick}
                handleItemDelete = {this.handleItemDelete}
            />
        )
    }
}


export default TodoList;