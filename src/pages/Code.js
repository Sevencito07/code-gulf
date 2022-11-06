import { useState } from "react"
import { useTask } from "../contex/TaskContex"
import './style.css'

export default function Taskform() {
const [taskName, setTaskName] = useState("")
const [taskName2, setTaskName2] = useState("")
const [taskName3, setTaskName3] = useState("")

const {createTask, adding}  = useTask()

//enviar task y id user
const handelSubmit= async (e)=>{
 e.preventDefault()
 createTask(taskName, taskName2, taskName3)
 setTaskName("")
 setTaskName2("")
 setTaskName3("")
 
}
  return (
    <div> 
      <h2>LRB</h2>
       <form  onSubmit={handelSubmit}>
        <input 
        name="taskName"
        onChange={(e)=>setTaskName(e.target.value)}
        placeholder="insulation"  value={taskName}/>

        <input 
        name="taskName2"
        onChange={(e)=>setTaskName2(e.target.value)}
        placeholder="conductor"  value={taskName2}/>
        
        <input 
        name="taskName3"
        onChange={(e)=>setTaskName3(e.target.value)}
        placeholder="shilef"  value={taskName3}/>
        
        <button disabled={adding}>
         {adding ? "..adding" : "add"}</button>
       </form>
       
    </div>
  )
}