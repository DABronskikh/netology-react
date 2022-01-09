import React from 'react'
import PropTypes from 'prop-types'

function LoadingIndicator(props) {
    const {isLoading} = props;

    return (
        <div>
            { isLoading && <p>Загрузка...</p> }
        </div>
    )
}

LoadingIndicator.propTypes = {
    isLoading: PropTypes.bool,
}

export default LoadingIndicator

