import {useState} from 'react'
import './index.css'
function TodoList(){
    const [tasks,setTasks] = useState(["run" , "swer" , "eat breakfast"])
    const [newTask, setNewTask] = useState("")
  const handleInputChange = (event)=>{
     setNewTask(event.target.value)
  }
  const addTask = () => {

  }
  const deleteTask = () => {

  }
  const moveTaskUp = () => {

  }
  const moveTaskDown = () => {

  }
  return(
   <div className="toDoList">
    <h1>To do list</h1>
    <div>
        <input type='text' placeholder='ENTER TASK' value={newTask} onChange={handleInputChange} ></input>
        <button className='add-task' onClick={addTask}>Add</button>
    </div>
    <ol>
        {tasks.map((task,index)=>
             <li key={index}>
                <span className="the-list">{task} </span>
                <button className="delete" onClick={deleteTask}>🗑️</button>
                <button className='move-up' onClick={moveTaskUp}>👆</button>
                <button className='move-down' onClick={moveTaskDown}>👇🏼</button>
             </li>)}
    </ol>
   </div>
  )
}
export default TodoList