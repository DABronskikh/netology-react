import React from 'react'
import PropTypes from 'prop-types'

function TodoItem(props) {
    const {value, id} = props;

    return ( <li className="list-group-item">{id} {value}</li> )
}

TodoItem.propTypes = {
    value: PropTypes.string.isRequired,
}

export default TodoItem

