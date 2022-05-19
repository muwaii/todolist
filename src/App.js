import { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import TodoLists from './components/TodoLists';
import Alert from './components/Alert.js';

function App() {
  // ------- state -------
  const [todo, setTodo] = useState('');
  const [todoLists, setTodoLists] = useState([]);
  const [editID, setEditID] = useState(null);
  const [editPopupInput, setEditPopupInput] = useState('');
  const [alertMessage, setAlertMessage] = useState('Welcome');
  const [alertToggle, setAlertToggle] = useState(false);

  // ------- function -------
  function onInputChange(event) {
    setTodo(event.target.value)
  }

  function onEditInputChange(event) {
    setEditPopupInput(event.target.value)
  }

  // --- add todo ---
  function onSubmit(event) {
    event.preventDefault()
    if(!todo) {   
      setAlertMessage('Please fill out this field');
      setAlertToggle((prev) => !prev)
    }
    else { 
      const newTodoLists = { id: new Date().getTime().toString(), title: todo }
      setTodoLists([newTodoLists, ...todoLists])
      setTodo('')
      setAlertMessage('Added');
      setAlertToggle((prev) => !prev)
    }
  }

  // --- edit todo ------------------------------------------------
  function onEdit(id) {
    const selectedTodo = todoLists.find((selected) => {
      return selected.id === id
    })    
    setEditPopupInput(selectedTodo.title)
    setEditID(id)
  }
  
  function onEditPopupSubmit(e) {
    e.preventDefault()
    setTodoLists((prevLists) => {
      return prevLists.map((eachTodo) => {
        if(eachTodo.id === editID) {
          return { ...eachTodo, title: editPopupInput };
        }      
        else {
          return eachTodo;
        }
      })
    })
    setEditID(null)
    setAlertMessage('Edited');
    setAlertToggle((prev) => !prev)
  }

  let editElement = null
  if(editID !== null) {
    editElement = (
      <div className='edit-form-container'> 
        <div className='edit-form-bg' onClick={() => setEditID(null)}>
          
        </div>
        <form className='edit-form' onSubmit={onEditPopupSubmit}>
              <div>test</div>
              <div className='edit-input-container'>
                <input 
                  className='edit-input' 
                  type='text' 
                  value={editPopupInput} 
                  onChange={onEditInputChange}
                />
                <button type='submit'>edit</button>
              </div>
          </form>
      </div>
    )
  }

  // --- delete todo ---
  function onDelete(id) {

    setTodoLists((prevList) => {
      return prevList.filter((list) => {
        return list.id !== id;
      });
    })
    setAlertMessage('Deleted');
    setAlertToggle((prev) => !prev)
  }

  return (
    <div className="App">
      <section>
        <h1 className='todolist-header'>Todolist</h1>
        <InputForm 
          todo={todo}
          onInputChangeFunction={onInputChange} 
          onSubmit={onSubmit}
        />
        <TodoLists 
          todoLists={todoLists}   
          onDelete={onDelete}
          onEdit={onEdit}
        />
      </section>
      {editElement}
      <Alert alertMsg={alertMessage} alertToggle={alertToggle} todoLists={todoLists} />
    </div>
  );
}

export default App;
