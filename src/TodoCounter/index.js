import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
  
  return (
    <h1 className="TodoCounter">
      <p>DEATH NOTE </p>
      Complete <span>{completedTodos}</span> of <span>{totalTodos}</span> kills
    </h1>
  );
}

export { TodoCounter };
