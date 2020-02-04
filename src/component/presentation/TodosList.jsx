import React from 'react';

export default class TodosList extends React.Component {
    render() {
        console.log("List Updating!", this.props.todos)
        const getListItems = todos => {
            return todos && todos.map( (todo) => (
                <li key={todo.id}>
                    <input type="checkbox" data-index={todo.id} id={`item${todo.id}`} 
                        onChange={() => this.props.toggleTodo(todo.id)}
                        checked={ todo.isComplete ? 'checked' : ''}/>
                    <label htmlFor={`item${todo.id}`}>{todo.task}</label>
                </li>)
            );
        }
        
        return (
            <ul className='todos'>
                {getListItems(this.props.todos)}
            </ul>
        );
    }
}