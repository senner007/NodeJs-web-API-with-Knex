import axios from 'axios'

const TodoAjaxMethods = (match, history) => {

    const id = match.params.id;
  
    const getById = async (setLoading) => {
      try {
        setLoading(true);
        let todo = await axios.get(`/api/todo/${id}`);
        setLoading(false);
        return todo.data;
      } catch (error) {
        console.log(error);
      }
    }
  
    const deleteTodo = async () => {
      try {
        await axios.delete(`${id}`);
      } catch (err) {
        console.log(err)
      }
      history.push('/');
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
      getById,
      deleteTodo,
      editTodo
    }
  } 

export default TodoAjaxMethods;