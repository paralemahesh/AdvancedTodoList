// const getNextTodoIndex = () => {
    // const state = JSON.parse(localStorage.getItem('todos'));
    // const todos = state.todos;
    // const currentIndex = todos && todos.length ? todos[todos.length-1].id : 0;
    // return currentIndex + 1;
// }

// export const addNewTodoAction = (newTodo) => ({
//     type: 'ADD_TODO', data: { id: getNextTodoIndex(), task: newTodo, isComplete: false }
// });

export const addNewTodoAction = (newTodo) => ({
    type: 'ADD_TODO', data: newTodo
});

export const toggleTodoAction = (id) => ({
    type: 'TOGGLE_TODO', data: { id }
});

export const searchTodosAction = (text) => ({
    type: 'SEARCH_TODOS', data: { text }
});