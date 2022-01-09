import React, {useState} from 'react'
import TodoItem from './TodoItem';
import shortid from 'shortid';

export default function TodoList(props) {

    // const [todos, setTodos] = useState([
    //     'Забрать машину',
    //     'Купить молоко',
    //     'Позвонить на работу',
    //     'Позвонить на работу',
    //     'Позвонить на работу',
    // ]);


    const [todos, setTodos] = useState([
        {id: shortid.generate(), value: 'Забрать машину'},
        {id: shortid.generate(), value: 'Купить молоко'},
        {id: shortid.generate(), value: 'Позвонить на работу'},
    ]);

    // const todoItems = todos.map((item) => <li>{item}</li>);

    const todoItems = todos.map(({id, value}) =>
        <TodoItem
            key={id}
            id={id}
            value={value}
        />
    );

    return (
        <div>
            <h2>Список дел:</h2>
            <ul className="list-group list-group-flush list-group-numbered">
                {todoItems}
            </ul>
        </div>
    );
}

