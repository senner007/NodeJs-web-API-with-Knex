import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

const TodoForm = (props) => {

    const [title, setTitle] = useState(props.title || '');
    const [isDone, setIsDone] = useState( props.isDone || false);
  
    const onTitleChange = e =>
      setTitle(e.target.value);

    const onIsDoneChange = e =>
      setIsDone(e.target.value);

    const submit = async (e, title, isDone) => {
      e.preventDefault();
      await props.submitTodo(title, isDone);
      props.submitResponse();
    }

    return (
      <form onSubmit={(e) => submit(e, title, isDone)}>
        <div className="form-group">
          <label htmlFor="title">Title of todo</label>
          <input name="title" type="text" className="form-control" id="title" value={title} onChange={onTitleChange}/> 
        </div>
        <div className="form-group">
          <label htmlFor="isDone">Todo completed?</label>
          <select name="isDone" className="form-control" id="is-done" value={isDone} onChange={onIsDoneChange}> 
            <option value="true">Yes</option> 
            <option value="false">No</option> 
          </select> 
          <div className="d-flex justify-content-between align-items-center mt-3">
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-danger" onClick={props.toggleEdit}>Cancel</button>
          </div>
        </div>
      </form>
    )
}

export default withRouter(TodoForm)




