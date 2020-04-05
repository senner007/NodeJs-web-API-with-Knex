import axios from 'axios'

const TodoAjaxMethods = (loader, id) => {

    function loaderWrapper (cb) {
      return async (...params) => {
        loader(true);
        const result = await cb(...params);
        loader(false);
        return result;
      }
    }

    const createTodo = async (title, isDone) => {
      console.log("creating")
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
  
    const getById = async () => {
      try {
        let todo = await axios.get(`/api/todo/${id}`);
        return todo.data;
      } catch (err) {
        console.log(err);
      }
    }
  
    const deleteTodo = async () => {
      try {
        await axios.delete(`${id}`);
      } catch (err) {
        console.log(err)
      }
    }
    
    const editTodo = async (title, isDone) => {
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