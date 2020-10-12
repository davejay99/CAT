import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='cont'>
      <h1 className='heading'>
        MATHEMATICS
      </h1>
      <div >
        <TodoList />
      </div>
    </div>
  );
}

export default App;
