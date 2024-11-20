import React, { useState } from 'react';
import ToDoList from './Components/ToDoList'; // Import ToDoList component
import './App.css'; // Import styles

function App() {
  const [inputValue, setInputValue] = useState(''); // State to store input value
  const [todos, setTodos] = useState([]); // State to store list of todos

  // Function to handle input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update the input value
  };

  // Function to add a new to-do item
  const addTodo = () => {
    if (inputValue.trim()) { // Check if input is not empty
      setTodos([...todos, inputValue]); // Add new to-do to the list
      setInputValue(''); // Clear the input field after adding
    }
  };

  // Function to remove a to-do item
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // Remove to-do by index
    setTodos(newTodos); // Update the to-do list
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>

      {/* Input field and Add button */}
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange} // Update the input value
          placeholder="Enter a to-do item"
        />
        <button onClick={addTodo}>Add</button> {/* Button to add to-do */}
      </div>

      {/* Render ToDoList component */}
      <ToDoList todos={todos} AddTodo={addTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
