import {useTask} from "../contex/TaskContex"
import TaskCard from "./Primary"
import TaskCard2 from './Shielf'
import TaskCard3 from "./Conductor"
import { useEffect } from "react"
import './style.css'
export default function TaskList() {

useEffect(()=>{
getTasks()
},[])

const {tasks, getTasks} = useTask()
function renderTask(){
 
  if(tasks.length === 0){
    return <h3>not task</h3>
   }else{
     return (
       <div className='conteniner'>
        <div className='form-conten'>
          <h1 >primary</h1>
        {
           tasks.map(task=>(
            <TaskCard  key={task.id} task= {task} />
           )
           )
         }
        </div>
        <div className='form-conten'>
          <h1 >insulation-shielf</h1>
        {
           tasks.map(task=>(
            <TaskCard2  key={task.id} task= {task} />
           )
           )
         }
        </div>
        <div className='form-conten'>
          <h1 >conductor</h1>
        {
           tasks.map(task=>(
            <TaskCard3  key={task.id} task= {task} />
           )
           )
         }
        </div>
       </div>
       
     )
   }
  
}

return <div>
  {renderTask()}
</div>
////  <TaskCard  key={task.id} task= {task} />
}