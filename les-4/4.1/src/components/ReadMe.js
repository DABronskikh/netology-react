import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import BookModel from '../models/BookModel';

export default function ReadMe() {
    const [books, setBooks] = useState([
        new BookModel(uuidv4(), 'name-1'),
        new BookModel(uuidv4(), 'name-2'),
    ]);
    const [filter, setFilter] = useState('');
    const [form, setForm] = useState({name: ''});

    const handleFilter = evt => {
        const {value} = evt.target;
        setFilter(value);
    };

    const handleChange = evt => {
        const {name, value} = evt.target;
        setForm(prevForm => ({...prevForm, [name]: value}));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        const book = new BookModel(uuidv4(), form.name);
        setBooks(prevBooks => [...prevBooks, book]);
        setForm({name: ''});
    };

    const handleRemove = id => {
        setBooks(prevBooks => prevBooks.filter(o => o.id !== id));
    };

    const handleDone = id => {
        setBooks(prevBooks => prevBooks.map(o => o.id === id ? new BookModel(o.id, o.name, !o.read) : o));
    };

    return (
        <>
            {/*<pre>{form.name}</pre>*/}
            <label htmlFor="search" className="form-label">Найти</label>
            <input id="search" type="search" value={filter} className="form-control" onChange={handleFilter}/>
            <ul className="list-group">
                {books
                    .filter(o => o.name.toLowerCase().includes(filter.trim().toLowerCase()))
                    .map(o => <li className="list-group-item d-flex justify-content-between"
                                  key={o.id}>
                        <div className="ms-2 me-auto">
                            {o.read && '✓'}{o.name}
                        </div>

                        <button className="btn btn-success" onClick={() => handleDone(o.id)}>Done!</button>
                        <button className="btn btn-danger" onClick={() => handleRemove(o.id)}>remove</button>
                    </li>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" className="form-label">Новая книга</label>
                <input id="name" name="name" value={form.name} className="form-control" onChange={handleChange}/>
            </form>
        </>
    )
}
