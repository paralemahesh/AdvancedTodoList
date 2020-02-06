import { connect } from 'react-redux';
import FiltersList from '../presentation/FiltersList.jsx'

const mapDispatchToProps = (dispatch) => {
    return { setVisibilityFilter: (filter) => dispatch( { type: filter })};
}

const mapStateToProps = (state) => {
    return { visibleFilter: state.filterCriterias.visibilityFilter };
}

const FiltersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FiltersList);

export default FiltersContainer;