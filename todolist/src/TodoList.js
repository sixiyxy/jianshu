import React, { Component } from "react";
import { connect } from "react-redux";

const TodoList = (props) => {
    const { inputValue, changeInputValue, handleClick, list } = props;
        return (
            <div>
                <div>
                    <input value={inputValue} onChange={changeInputValue}/>
                    <button onClick={handleClick}>提交</button>
                </div>
                <ul>
                    {
                        list.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
}

// class TodoList extends Component {
//     render() {
//         const { inputValue, changeInputValue, handleClick, list } = this.props;
//         return (
//             <div>
//                 <div>
//                     <input value={inputValue} onChange={changeInputValue}/>
//                     <button onClick={handleClick}>提交</button>
//                 </div>
//                 <ul>
//                     {
//                         list.map((item, index) => {
//                             return <li onClick={this.props.handleDelete} key={index}>{item}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },
        handleClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action);
        },
        handleDelete() {

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);