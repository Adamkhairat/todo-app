import React, {useState, useEffect}  from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //setting a state for the input text field
  const [inputText, setInputText] = useState("");

  //setting a state for the todos and it'll be an array(because we're gonna have array of objects)
  const [todos, setTodos ] = useState([]);

  //setting a state for the filter(all, completed, uncompleted)
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Run once when the app starts
  useEffect(() => {
    getLocalTodos()
  }, [])

  //Use Effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // a function for filtering
  const filterHandler = () => {
    switch(status){
      case "completed": 
      setFilteredTodos(todos.filter((todo) => todo.completed === true));
      break;

      case "uncompleted":
      setFilteredTodos(todos.filter((todo) => todo.completed === false));
      break;

      default:
      setFilteredTodos(todos);
      break;
    }
  }

  // save to local storage
  const saveLocalTodos = () =>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null ){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
    } 
  }

  
  return (
    <div className="App">
      <header>
    <h1>Khair's Todo List</h1>
      </header>
      <Form 
      inputText={inputText} 
      setInputText={setInputText} 
      todos={todos} 
      setTodos={setTodos} 
      setStatus={setStatus}
      />
      
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

//we're passing setInputText(function), todos(state) setTodos(function) to Form component and it will be passed as props

// we'll pass in setTodos(function) into TodoList component so we can modify our state(todos)

export default App;
