import React, { useState } from 'react';

const MaxTodoLimitBug = () => {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');
  const [checkedTodos, setCheckedTodos] = useState({});

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length > 10) {
      alert('You are exceeding the character limit!');
      setTodoValue(inputValue.slice(0, 10));
    } else {
      setTodoValue(inputValue);
    }
  };

  const addTodo = () => {
    

    const newId = Math.max(...todos.map(todo => todo.id), 0) + 1;
    const newTodo = { id: newId, text: todoValue };

    setTodos([...todos, newTodo]);
    setCheckedTodos({ ...checkedTodos, [newId]: false }); 
    setTodoValue(''); 
  };

  const deleteTodo = (idToDelete) => {
    console.log("Deleted todo with id:", idToDelete);
  };

  const toggleTodoColor = (id) => {
    setCheckedTodos({ ...checkedTodos, [id]: !checkedTodos[id] });
  };

  return (
    <div className="todo-container">
      <h2 className="title">Todo List (Maximum limit: 10)</h2>
      <input
        type="number"
        value={todoValue}
        onChange={handleInputChange}
        placeholder="Enter todo text"
        className="todo-input"
      />
      <button onClick={addTodo} className="add-button">Add Todo</button>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={`todo-item ${checkedTodos[todo.id] ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={checkedTodos[todo.id]}
              onChange={() => toggleTodoColor(todo.id)}
              className="todo-checkbox"
            />
            <span className="todo-text">{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MaxTodoLimitBug;
