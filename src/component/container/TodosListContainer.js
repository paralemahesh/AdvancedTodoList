import { connect } from 'react-redux';
import TodosList from '../presentation/TodosList.jsx';
import { toggleTodoAction } from '../../action/actions.js'

const getVisibleTodos = (todos, visibilityFilter, filterCriterias) => {
    let condition;
    switch(visibilityFilter){
        case 'COMPLETED_TODOS': condition = (item) => item.isComplete; break;
        case 'INCOMPLETE_TODOS': condition = (item) => !item.isComplete; break;

        default: condition = null;
    }

    let filteredTodos = condition == null ? todos : todos.filter(condition);
    let visibleTodos = filterCriterias.searchText ? filteredTodos.filter((item)=>item.task.includes(filterCriterias.searchText)) : filteredTodos;

    console.log(filterCriterias.searchText);
    console.log(visibleTodos);

    return visibleTodos;
}

const mapStateToProps = state => {
    return {todos: getVisibleTodos(state.todos, state.visibilityFilter, state.filterCriterias)};
};

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodoAction(id))
  })

const TodosListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodosList);

export {TodosListContainer as default};