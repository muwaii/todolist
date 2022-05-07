import { useState } from 'react';
import './App.css';
import InputForm from './compenents/InputForm';

function App() {
  // ------- state -------
  const [todo, setTodo] = useState("")
  const [todoLists, setTodoLists] = useState([])


  // ------- function -------
  function onInputChange(event) {
    console.log(event.target.value)
    setTodo(event.target.value)
  }

  function onSubmit(event) {
    event.preventDefault()

    setTodoLists((prevTodoLists) => {
      return [...prevTodoLists, todo]
    })
    setTodo('')
  }


  return (
    <div className="App">
      <section>
        <InputForm 
          todo={todo}
          onInputChangeFunction={onInputChange} 
          onSubmit={onSubmit}
        />
        {/* todo lists component */}
      </section>
    </div>
);
}

export default App;
