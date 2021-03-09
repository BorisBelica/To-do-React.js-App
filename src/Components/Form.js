import React from "react"

// styles
import './Form.scss';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

    // input text in text field form
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
        //console.log(e.target.value)
    };


    //submit + icon, submit new to do
    const submitTodoHandler = (e) => {
        e.preventDefault()

        // create new object
        if (inputText.length > 0) {
            setTodos([
                ...todos,
                {
                    text: inputText, 
                    completed: false, 
                    id: Math.random() * 1000
                }
            ])
            setInputText('')  
        } else {
            alert("Nemôžeš pridať prázdnu hodnotu!")
        }
    };
    

    // status filter handler 
    const statusHandler = (e) => {
       setStatus(e.target.value)
    } 



    // template
    return (
        <form>
            <div className="input-div">
                <input autoFocus value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
            </div>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form

