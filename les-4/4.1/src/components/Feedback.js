import React, {useState} from 'react'

export default function Feedback() {
    const[form,setForm]=useState({
        name: '',
        score: 'good',
        agreement: false,
    });

    const  handleSubmit = evt => {
        evt.preventDefault();
        console.log(evt.type);
        console.dir(evt.target);
    }

    const handleNameChange = ({target}) => {
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setForm(prevForm => ({...prevForm, [name]: value}));
    }


    return (
        <form onSubmit={handleSubmit}>
            <pre>{JSON.stringify(form, null, ' ')}</pre>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Ваше имя</label>
                <input
                    className="form-control"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleNameChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="score">Выберите уровень удовлетворённости </label>
                <select
                    className="form-select"
                    id="score"
                    name="score"
                    value={form.score}
                    onChange={handleNameChange}
                >
                    <option value="good">Хорошо</option>
                    <option value="normal">Нормально</option>
                    <option value="bad">Не очень</option>
                </select>
            </div>
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="agreement"
                    name="agreement"
                    value={form.agreement}
                    onChange={handleNameChange}
                />
                <label className="form-check-label" htmlFor="agreement">Согласен на передачу перс. данных</label>
            </div>
            <button type="submit" className="btn btn-primary">Отправить</button>
        </form>
    )
}
