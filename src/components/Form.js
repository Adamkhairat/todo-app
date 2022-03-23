import React from 'react'

// passing/importing props from app.js so it can be accessible here
function Form({inputText, setInputText, setTodos, todos, setStatus}) {
    
    //writing a function that will update inputText state that is in App.js
    const inputTextHandler = (e) => {
        //data that updates the inputText state
        setInputText(e.target.value);
    }

    //we want to submit it and create an object with the data
    const submitTodoHandler = (e) =>{
        e.preventDefault();
        //create a new object that we're gonna add
        setTodos([
            // spread todos(what this means is if i have some todos already on the list, just pass it), then the braces{} means: incase there's a new one, add the new one. the write the format you want the todos to be in the braces
            // for the id, there's a package that can be used but i'll use math.random for now.
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        //input text set to zero(in the sense that when the plus button is clicked, it'll refresh the text field)
        setInputText("");
    }

    //we want to filter all, completed, uncompleted
    const statusHandler = (e) => {
        setStatus(e.target.value)
        
    }
    
    // passing the inputTextHandler function using the onChange eventhandler
    //passing the submitTodoHandler function using the onClick eventhandler
    // giving the input a value so it'll update the when the state is refreshed/updated
  return (
    <div>
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Form;