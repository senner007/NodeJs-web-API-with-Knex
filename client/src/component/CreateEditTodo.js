import React, { useState } from 'react'
import axios from 'axios';

const SingleTodoEdit = (props) => {
  const [title, setTitle] = useState(props.title || '');
  const [isDone, setIsDone] = useState( props.isDone || false);

  const onChangeItem = (e) => {
    const target = e.target;
    const name = target.name;

    setTitle({
      [name]: target.value
    });
  }

  return (
    <form>
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
          <button type="button" className="btn btn-danger">Cancel</button>
        </div>
      </div>
    </form>
  )
}

export default SingleTodoEdit
