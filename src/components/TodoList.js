import React from 'react';
import Todo from './Todo';

//importing todos(state) and setTodos(function) as a props from app.js
function TodoList({todos, setTodos, filteredTodos}) {
    
  // map through todos and for each object render out a todo

  //for each todo from the state that we have, render out a todo component

  //pass down data to our component using props which is: passing todos(state) and setTodos(function) to Todo component so we have access to them
  return ( 
    
    <div>
        <div className="todo-container">
            <ul className="todo-list">
               {filteredTodos.map((todo) => (
                <Todo 
                // what todo={todo} means is we're going through each individual todo(element) and having acces to each one of them
                todo={todo}  
                todos={todos} 
                setTodos={setTodos} 
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
