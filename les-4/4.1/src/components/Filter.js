import React from 'react'
import PropTypes from 'prop-types'

function Filter(props) {
    const handleFilter = evt => {
        const {value} = evt.target;
        props.onFilter(value);
    };

    return (
        <>
            <label htmlFor="search" className="form-label">Найти</label>
            <input id="search"
                   type="search"
                   value={props.filter}
                   className="form-control"
                   onChange={handleFilter}
            />
        </>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
};

export default Filter;
