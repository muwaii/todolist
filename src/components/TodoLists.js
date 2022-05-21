import './TodoLists.css'
import { IoRadioButtonOffOutline, IoCheckmarkCircleSharp } from "react-icons/io5";
import { FiEdit, FiTrash2 } from "react-icons/fi";

function TodoLists(props) {


    const todoListsElements = props.todoLists.map((todo) => {
        return (
            <div className='todo-list-box' key={todo.id}>
                <div className='item item-1'>
                    <div 
                    className={`done-but ${ todo.deco ? 'done-but-deco': '' }`}
                    onClick={() => {props.onTodoDone(todo.id)}}
                    >
                        { todo.deco ? <IoCheckmarkCircleSharp /> : <IoRadioButtonOffOutline /> }
                    </div>    
                </div>
                <div className='item item-3'>
                    <div className={`list  ${ todo.deco ? 'todo-deco' : '' }`}>{todo.title}</div>
                </div>
                <div className='item item-4'>
                    <div 
                    className="edit-but" 
                    type='botton' 
                    onClick={() => {props.onEdit(todo.id)}}
                    >
                        <FiEdit />
                    </div>    
                    <div 
                    className="delete-button" 
                    type='botton' 
                    onClick={() => {props.onDelete(todo.id)}}
                    >
                        <FiTrash2 />
                    </div>    
                </div>
            </div>
        )
    })

    return (
        <div className="todo-lists"> 
            {todoListsElements}
        </div>
    )
}

export default TodoLists