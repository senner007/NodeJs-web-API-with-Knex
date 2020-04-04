import React, { useState } from 'react'

import axios from 'axios';
import { withRouter } from 'react-router-dom'

const TodoForm = (props) => {

    const [title, setTitle] = useState(props.title || '');
    const [isDone, setIsDone] = useState( props.isDone || false);
    const toggleEdit = props.toggleEdit;
    const updateTodo = props.updateTodo;

    const onChangeItem = (e) => {
        if(e.target.tagName === 'INPUT'){
        setTitle(e.target.value);
        } else if(e.target.tagName === 'SELECT') {
        setIsDone(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { id, history } = props;
        if(id) {
        axios.put(`/api/todo/${id}`, {
            title: title,
            is_done: isDone === 'true'
        }).then(() => {
            updateTodo(title, isDone === 'true')
            toggleEdit();
        })
        } else {
        axios.post('/api/todo', {title: title, is_done: isDone === 'true' }).then(() => {
            history.push('/')
        })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="title">Title of todo</label>
            <input name="title" type="text" className="form-control" id="title" value={title} onChange={onChangeItem}/> 
        </div>
        <div className="form-group">
            <label htmlFor="isDone">Todo completed?</label>
            <select name="isDone" className="form-control" id="is-done" value={isDone} onChange={onChangeItem}> 
            <option value="true">Yes</option> 
            <option value="false">No</option> 
            </select> 
            <div className="d-flex justify-content-between align-items-center mt-3">
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-danger" onClick={toggleEdit}>Cancel</button>
            </div>
        </div>
        </form>
    )

}

export default TodoForm



