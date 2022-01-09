import React, {useState} from 'react'
import PropTypes from 'prop-types'
import BookModel from "../models/BookModel";
import {v4 as uuidv4} from "uuid";

function BookAddForm(props) {
    const {onAdd} = props;
    const [form, setForm] = useState({name: ''});

    const handleChange = evt => {
        const {name, value} = evt.target;
        setForm(prevForm => ({...prevForm, [name]: value}));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        const book = new BookModel(uuidv4(), form.name);
        onAdd(book);
        setForm({name: ''});
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="form-label">Новая книга</label>
            <input
                id="name"
                name="name"
                value={form.name}
                className="form-control"
                onChange={handleChange}
            />
        </form>
    )
}

BookAddForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
};

export default BookAddForm;
