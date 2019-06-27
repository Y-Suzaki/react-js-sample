export const addTodo = (text) => {
  return {
      type: 'ADD_TODO',
      text
  }
};

export const deleteTodo = (index)=> {
    return {
        type: 'DELETE_TODO',
        index
    }
};