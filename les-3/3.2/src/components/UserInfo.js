import React from 'react'
import PropTypes from 'prop-types'

function UserInfo(props) {
    const {name, img} = props;

    return (
        <div>
            <img src={img} />
            <div>{name || 'Гость'}</div>
            <div>{name ? name : 'Гость'}</div>
        </div>
    )
}

UserInfo.defaultProps = {
    img: 'https://dummyimage.com/100x100/000/ffffff&text=default',
};

UserInfo.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
};

export default UserInfo

