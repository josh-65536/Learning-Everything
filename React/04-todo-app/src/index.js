import React from 'react';
import ReactDOM from 'react-dom';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

let nextId = 4;

class App extends React.Component {
    state = {
        todoList: [
            { id: 1, message: 'Learn React and Redux', deadline: 'Friday' },
            { id: 2, message: 'Keep up with the Kardashians.', deadline: 'Tuesday' },
            { id: 3, message: 'Buy eggs.', deadline: 'Sunday' },
        ]
    }

    addTodo = todo => {
        todo.id = nextId++;

        this.setState({
            todoList: [...this.state.todoList, todo]
        });
    }

    removeTodo = id => {
        const newList = this.state.todoList.filter(t => t.id !== id);
        this.setState({ todoList: newList });
    }

    render() {
        return (
            <div className="container">
                <h1 className="center">Todo List</h1>
                <AddTodoForm addTodo={this.addTodo} />
                <TodoList todoList={this.state.todoList} removeTodo={this.removeTodo} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));