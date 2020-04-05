import axios from 'axios'

const TodoAjaxMethods = (loader) => {

    function loaderWrapper (cb) {
      return async (...params) => {
        loader(true);
        const result = await cb(...params);
        loader(false);
        return result;
      }
    }

    const createTodo = async (title, isDone) => {
      try {
        await axios.post('/api/todo', 
        {
          title: title, 
          is_done: isDone === 'true' 
        });
      } catch (err) {
        console.log(err);
      }
    }
  
    const getById = async (id) => {
      try {
        const todo = await axios.get(`/api/todo/${id}`);
        return todo.data;
      } catch (err) {
        console.log(err);
      }
    }
  
    const deleteTodo = async (id) => {
      try {
        await axios.delete(`${id}`);
      } catch (err) {
        console.log(err)
      }
    }
    
    const editTodo = async (id, title, isDone) => {
      try {
        await axios.put(`/api/todo/${id}`, {
          title: title,
          is_done: isDone === 'true'
        });
      } catch (err) {
        console.log(err);
      }
    }
  
    return {
      getById : loaderWrapper(getById),
      deleteTodo : loaderWrapper(deleteTodo),
      editTodo : loaderWrapper(editTodo),
      createTodo : loaderWrapper(createTodo)
    }
  } 

export default TodoAjaxMethods;