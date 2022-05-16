import { useEffect, useState } from 'react';
import './App.css';
import InputForm from './compenents/InputForm';
import TodoLists from './compenents/TodoLists';

function App() {
  // ------- state -------
  const [todo, setTodo] = useState('');
  const [todoLists, setTodoLists] = useState([]);
  const [editID, setEditID] = useState(null);
  const [editPopupInput, setEditPopupInput] = useState('');
  const [alerMessage, setAlertMessage] = useState('');


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
      alertToast("nooooo");
    }
    else { 
      const newTodoLists = { id: new Date().getTime().toString(), title: todo }
      setTodoLists([newTodoLists, ...todoLists])
      setTodo('')
      alertToast("added");
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
    alertToast('editttt');
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
    alertToast('deleteeeee');
  }


  // alert function
    function alertToast(alertMsg) {
      setAlertMessage(alertMsg)
      var x = document.getElementById('alert-ele');
      x.className = "show";

        setTimeout(() => { 
          x.className = x.className.replace("show", ""); 
        }, 3000);
    }


  return (
    <div className="App">
      <section>
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
      <div id='alert-ele'>{alerMessage}</div>
    </div>
  );
}

export default App;
