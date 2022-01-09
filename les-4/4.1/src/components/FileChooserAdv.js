import React, {useState} from 'react'

export default function FileChooserAdv() {
    const [form, setForm] = useState({
        name: '',
        files: null,
    });

    const  handleSubmit = evt => {
        evt.preventDefault();
        console.log(evt.type);
        console.dir(evt.target);
    }

    const handleChange = evt => {
        const {name, value} = evt.target;
        setForm(prevForm => ({...prevForm, [name]: value}));
    };

    const handleSelect = evt => {
        const {name, files} = evt.target;
        console.log(files);
        setForm(prevForm => ({...prevForm, [name]: files}));
    }

    return (
        <form onSubmit={handleSubmit}>
            <pre>{JSON.stringify(form, null, ' ')}</pre>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Имя</label>
                <input
                    className="form-control"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="files" className="form-label">Файлы</label>
                <input className="form-control" type="file" name="files" id="files" onChange={handleSelect} />
            </div>
            <button type="submit" className="btn btn-primary">ок</button>
        </form>
    )
}
