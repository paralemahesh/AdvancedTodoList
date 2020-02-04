import React from 'react';
import { connect } from 'react-redux';
import { addNewTodoAction } from '../../action/actions.js'

const addNewTodo = (e, dispatch) => {
    e.preventDefault();
    
    const newTodoText = document.querySelector('#newTodo');
    const newTodo = newTodoText.value;
    dispatch(addNewTodoAction(newTodo));
    newTodoText.value = '';
}

const AddTodo = ({dispatch}) => {
    return (
        <div>
            <input id='newTodo'></input>
            <button onClick={(e) => addNewTodo(e, dispatch)}>Add!</button>
        </div>
    );
}

export default connect()(AddTodo);