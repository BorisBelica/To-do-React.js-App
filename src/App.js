import React, { useState, useEffect } from "react"

// SCSS
import './App.scss';

// Components
import Form from './Components/Form'
import TodoList from './Components/TodoList'


function App() {

  // states
  const [inputText, setInputText] = useState ('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("All")
  const [filterTodos, setFiltertodos] = useState([])

  // functions and events
  const filterHandler = () => {
    switch(status) {
      case 'completed':
      setFiltertodos(todos.filter(todo => todo.completed === true)); 
      break;

      case 'uncompleted' :
      setFiltertodos(todos.filter(todo => todo.completed === false)); 
      break;

      default:
      setFiltertodos(todos);
      break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  } 

  // get / load local todos
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null ) {
      localStorage.setItem('todos', JSON.stringify([]))
    } 
    
    else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

  // RUN ONCE ON START
  useEffect (() => {
    getLocalTodos()
  }, [])

  // useEffect
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])  // state when should use effect

  // template 
  return (
    <div className="App">
      <h1>To do App - React.js</h1>

      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos} 
        setStatus={setStatus}
      />

      <TodoList
        setTodos={setTodos} 
        todos={todos}
        filterTodos={filterTodos} 
      />

    </div>
  );
}

export default App;
