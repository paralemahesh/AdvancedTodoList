import React from 'react';
import Filter from '../presentation/Filter.jsx';

const FiltersList = (props) => {
    return (
        <React.Fragment>
            <Filter type='COMPLETED_TODOS' 
                isActive={props.visibleFilter === 'COMPLETED_TODOS'}
                onClickHandler={props.setVisibilityFilter}>
                Completed
        </Filter>

        <Filter type='INCOMPLETE_TODOS' 
            isActive={props.visibleFilter === 'INCOMPLETE_TODOS'} 
            onClickHandler={props.setVisibilityFilter}>
                Incomplete
        </Filter>

        <Filter type='ALL_TODOS' 
            isActive={props.visibleFilter === 'ALL_TODOS'} 
            onClickHandler={props.setVisibilityFilter}>
            All
        </Filter>
        </React.Fragment>
    )
}

export default FiltersList;