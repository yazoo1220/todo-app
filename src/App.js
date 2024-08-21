import React, { useState } from 'react';
import './App.css'; // Create a CSS file or add styles here

const App = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = () => {
        if (input.trim() !== "") {
            setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
            setInput("");
        }
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="container">
            <h1>Todo App</h1>
            <div className="input-group">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
