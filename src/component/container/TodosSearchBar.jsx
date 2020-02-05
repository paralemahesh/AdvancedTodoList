import {connect} from 'react-redux';
import {searchTodosAction} from '../../action/actions.js';  
import SearchBar from '../presentation/SearchBar/SearchBar.jsx';

const mapDispatchToProps = (dispatch) => {
    return { searchTodos : (text) => { console.log(text, dispatch); dispatch(searchTodosAction(text)); }}
}

const FiltersContainer = connect(
    null,
    mapDispatchToProps
)(SearchBar);

export default FiltersContainer;