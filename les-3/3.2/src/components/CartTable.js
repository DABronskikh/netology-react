import React from 'react'
import PropTypes from 'prop-types'

function CartTable(props) {
    const {items, headings, currency} = props;

    const tableItems = items.map(item => (
        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
        </tr>
    ));
    const header = <tr>{headings.map((title, index) => <td key={index}>{title}</td>)}</tr>;
    const getTotalPrice = items => items.reduce((prev, item) => prev + item.price * item.quantity, 0);

    return (
        <table className="table">
            <thead> {header} </thead>
            <tbody>
                {tableItems}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={3}>К оплате: {currency} {getTotalPrice(items)}</td>
                </tr>
            </tfoot>
        </table>
    );
}

CartTable.defaultProps = {
    headings: ['Название товара', 'Цена', 'Количество'],
    currency: '$',
}


CartTable.propTypes = {

}

export default CartTable

