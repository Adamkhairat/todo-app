import React from 'react'

//pass down data to our component using props
function Todo({text, todo, todos, setTodos}) {
    // we need to modify our state in order to delete a todo-item we need setTodos function to modify our state

    // Events
    const deleteHandler = () => {
        //filter out or check the current todos. If the element.id does not match the todo id, then get rid of it
        // in other words, we are comparing what is been clicked with what is in the state
        setTodos(todos.filter((el) => el.id !== todo.id));
        console.log(todo)
    };

    //again we are comparing/mapping over the item that is been clicked with item in the state
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

  return (
    <div>
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    </div>
  )
}

export default Todo