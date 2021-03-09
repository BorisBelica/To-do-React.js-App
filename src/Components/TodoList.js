import React from "react"

// Components
import Todo from './Todo'
import './TodoList.scss';

// SASS


// template
const TodoList = ({ todos, setTodos, filterTodos }) => {

    return (
        <div>
            <h2>Moje úlohy</h2>

            <div className="todo-container">
                <ul className="todo-list">
                    {filterTodos.map(todo => (
                        <Todo 
                            setTodos={setTodos}
                            todos={todos}
                            todo={todo} 
                            key={todo.id} 
                            text={todo.text} 
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList