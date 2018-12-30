import React from 'react';

class AddTodoForm extends React.Component {
    state = {
        message: '',
        deadline: ''
    }

    onMessageChange = e => {
        this.setState({
            message: e.target.value,
            deadline: this.state.deadline
        });
    }

    onDeadlineChange = e => {
        this.setState({
            message: this.state.message,
            deadline: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            message: '',
            deadline: ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Add New Todo:</label>
                    <div className="row">
                        <div className="input-field col s5">
                            <input
                                type="text"
                                placeholder="Message"
                                onChange={this.onMessageChange}
                                value={this.state.message} />
                        </div>
                        <div className="input-field col s5">
                            <input
                                type="text"
                                placeholder="Deadline"
                                onChange={this.onDeadlineChange}
                                value={this.state.deadline} />
                        </div>
                        <div className="input-field col s2">
                            <button className="btn-large waves-effect waves-light" type="submit" name="action">
                                <i class="material-icons left">add</i>
                                Add Todo
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddTodoForm;