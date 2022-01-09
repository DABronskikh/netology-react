import React, { Component } from 'react'

export class FeedbackClassBased extends Component {
    state = {
        name: '',
        score: 'good',
        agreement: false,
    };

    handleSubmit = evt => {
        evt.preventDefault();
        console.log(evt.type);
        console.dir(evt.target);
    }

    handleNameChange = ({target}) => {
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({[name]: value});
    }

    render() {
        const form = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <pre>{JSON.stringify(form, null, ' ')}</pre>
                
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Ваше имя</label>
                    <input 
                        className="form-control" 
                        id="name" 
                        name="name" 
                        value={form.name} 
                        onChange={this.handleNameChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="score">Выберите уровень удовлетворённости </label>
                    <select 
                        className="form-select" 
                        id="score" 
                        name="score" 
                        value={form.score}  
                        onChange={this.handleNameChange}
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
                        onChange={this.handleNameChange}
                    />
                    <label className="form-check-label" htmlFor="agreement">Согласен на передачу перс. данных</label>
                </div>
                <button type="submit" className="btn btn-primary">Отправить</button>
            </form>
        )
    }
}

export default FeedbackClassBased
