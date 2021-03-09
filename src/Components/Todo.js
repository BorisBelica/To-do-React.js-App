import React from "react"

// styles
import './Todo.scss';

//components

const Todo = ({ text, todo, todos, setTodos, inputText, setInputText, inputTextHandler }) => {

    //events


    // DELETE 
    const deleteHandler = () => {
        // find element that matches click on delete icon
        setTodos(todos.filter( (el) => el.id !== todo.id))
    }

    // EDIT
    const editHandler = () => {
        console.log('edit')
    }


    // COMPLETED
    const completeHandler = () => {

        // compare if click is same id from state
        setTodos(todos.map( (item) => {
            if(item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed     //opposite of prev state
                }
            }
                // did not match
                return item
            }
        )
    )}

    // template
    return (
        <div className="todo">

            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>
                {text}
            </li>

            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>

            <button onClick={editHandler} className="edit-btn">
                <i className="fas fa-edit"></i>
            </button>

            <button onClick={deleteHandler} className="trash-btn">
            <i className="fas fa-trash"></i>
            </button>

        </div>
    )
}
export default Todo