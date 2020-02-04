import { connect } from 'react-redux';
import TodosList from '../presentation/TodosList.jsx';
import { toggleTodoAction } from '../../action/actions.js'

const getVisibleTodos = (todos, visibilityFilter) => {
    let condition;
    switch(visibilityFilter){
        case 'COMPLETED_TODOS': condition = (item) => item.isComplete; break;
        case 'INCOMPLETE_TODOS': condition = (item) => !item.isComplete; break;

        default: return todos;
    }
    return todos.filter(condition);
}

const mapStateToProps = state => {
    return {todos: getVisibleTodos(state.todos, state.visibilityFilter)};
};

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodoAction(id))
  })

const TodosListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodosList);

export {TodosListContainer as default};