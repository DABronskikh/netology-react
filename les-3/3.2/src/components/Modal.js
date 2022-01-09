import React from 'react'
import PropTypes from 'prop-types'

function Modal(props) {
    const modalClass = props.danger ? 'danger' : 'default';

    return (
        <div className={`_modal ${modalClass}`}>{ props.text} {modalClass}</div>
    )
}

// Modal.propTypes = {
//     // danger: PropTypes.bool,
//     text: PropTypes.string.isRequired,
// }

export default Modal



