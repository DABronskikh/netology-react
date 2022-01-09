import React, {useState} from 'react';
import {nanoid} from 'nanoid';
import BookModel from '../models/BookModel';

export default function ReadMe() {
    const [books, setBooks] = useState([]);
    const [filter, setFilter] = useState('');
    const [form, setForm] = useState({name: ''});

    return (
        <>
            <input type="search" value={filter} onChange={handleFilter} />
            <ul>
                {books
                    .filter(o => o.name.toLowerCase().includes(filter.trim().toLowerCase()))
                    .map(o => <li key={o.id}>
                        {o.read && '✓'}{o.name}
                        <button onClick={()=>handleDone(o.id)}>Done!</button>
                        <button onClick={()=>handleRemove(o.id)}>Remove</button>
                    </li>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <input name="name" value={form.name} onChange={handleChange} />
            </form>
        </>
    )
}
