import React from 'react';
import '../../../todoApp.css';
import TodosListContainer from '../../container/TodosListContainer.js';
import AddTodo from '../../container/AddTodo.jsx';
import FiltersContainer from '../../container/FiltersContainer.jsx';

export default class TodoApp extends React.Component {

    render(){
        return(
            <div className='appContainer'>
                <div className='appBody'>
                    <h3 style={{width: '200px'}}>My Todos</h3>
                    <TodosListContainer></TodosListContainer>
                    <AddTodo></AddTodo>
                    <FiltersContainer></FiltersContainer>
                </div>
            </div>
        );
    }
}

