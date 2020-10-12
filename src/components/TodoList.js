import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };


  return (
    <>
      <div className='todo-app'>
        <div className='head-info'>
          <div className='head-title'>
            <h3>Action</h3>
            <p>Move, Indent,</p>
            <p>Outdent, Delete</p>
          </div>

          <div className='head-title'>
            <h3>Standard</h3>
            <p>The text of the standard</p>
          </div>

        </div>
        <Todo
          todos={todos}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
      <TodoForm onSubmit={addTodo} />

    </>
  );
}

export default TodoList;