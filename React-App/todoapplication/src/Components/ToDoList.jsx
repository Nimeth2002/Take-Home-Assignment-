import React from 'react';

function ToDoList({ todos, removeTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => removeTodo(index)}>Remove</button> {/* Button to remove to-do */}
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
