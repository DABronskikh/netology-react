import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AccountsHolder(props) {
    const {render} = props;

    const [accounts, setAccounts] = useState([
        {id: 1, name: '**** *464', balance: 10000},
        {id: 2, name: '**** *464', balance: 10000},
        {id: 3, name: '**** *464', balance: 10000},
    ]);

    return (
        <>
            {render(accounts)}
        </>
    );
}

AccountsHolder.propTypes = {
    render: PropTypes.func.isRequired,
}

export default AccountsHolder

