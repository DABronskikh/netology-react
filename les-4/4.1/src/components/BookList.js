import React from 'react'
import PropTypes from 'prop-types'
import BookModel from "../models/BookModel";

function BookList(props) {
    const {books, handleRemove, handleDone} = props;

    const BookItem = ({book, onRemove, onDone}) => (
        <li className="list-group-item d-flex justify-content-between" >
            <div className="ms-2 me-auto">
                {book.read && '✓'}{book.name}
            </div>
            <button className="btn btn-success" onClick={() => onDone(book.id)}>Done!</button>
            <button className="btn btn-danger" onClick={() => onRemove(book.id)}>remove</button>
        </li>
    );

    return (
        <ul className="list-group">
            {books.map(o => <BookItem
                key={o.id}
                book={o}
                onRemove={handleRemove}
                onDone={handleDone}/>
            )}
        </ul>
    )
}

BookList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.instanceOf(BookModel)).isRequired,
    handleRemove: PropTypes.func.isRequired,
    handleDone: PropTypes.func.isRequired,
};

export default BookList;
