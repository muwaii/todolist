import './TodoLists.css'
import { IoCheckmarkCircleOutline, IoMagnet } from "react-icons/io5";
import { FiEdit, FiTrash2 } from "react-icons/fi";

function TodoLists(props) {

    const todoListsElements = props.todoLists.map((todo) => {
        return (
            <div className='todo-list-box' key={todo.id}>
                <div className='item item-1'>
                    <div 
                    className="done-but" 
                    onClick={() => {props.onDelete(todo.id)}}
                    >
                        <IoCheckmarkCircleOutline />
                    </div>    
                </div>
                {/* <div className='item item-2'>
                    <div className='split'>:</div>    
                </div> */}

                <div className='item item-3'>
                    <div className="list">{todo.title}</div>
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