import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import BookModel from '../models/BookModel';
import Filter from "./Filter";
import BookList from "./BookList";
import BookAddForm from "./BookAddForm";

export default function ReadMeUpdate() {
    const [books, setBooks] = useState([
        new BookModel(uuidv4(), 'name-1'),
        new BookModel(uuidv4(), 'name-2'),
    ]);
    const [filter, setFilter] = useState('');

    const handleAdd = book => {
        setBooks(prevBooks => [...prevBooks, book]);
    };

    const handleRemove = id => {
        setBooks(prevBooks => prevBooks.filter(o => o.id !== id));
    };

    const handleDone = id => {
        setBooks(prevBooks => prevBooks.map(o => o.id === id ? new BookModel(o.id, o.name, !o.read) : o));
    };

    const handleFilter = value => {
        setFilter(value);
    };

    const filtered = books.filter(
        o => o.name.toLowerCase().includes(filter.trim().toLowerCase())
    );

    return (
        <>
            <Filter filter={filter} onFilter={handleFilter}/>
            <BookList books={filtered} handleRemove={handleRemove} handleDone={handleDone}/>
            <BookAddForm onAdd={handleAdd}/>
        </>
    )
}
