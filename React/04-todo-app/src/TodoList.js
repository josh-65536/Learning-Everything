import React from 'react';

const TodoList = ({todoList, removeTodo}) => {
    const elements = todoList.length ? (
        todoList.map(t => (
            <li className="collection-item" key={t.id}>
                <p>
                    <a href="#" className="secondary-content" onClick={() => removeTodo(t.id)}>
                        <i className="material-icons">close</i>
                    </a>
                    {t.message}<br />
                    <small>{t.deadline}</small>
                </p>
            </li>
        ))
    ) : (
        <p className="center">You have finished all your todos.</p>
    )

    return (
        <ul className="collection">
            {elements}
        </ul>
    )
};

export default TodoList;