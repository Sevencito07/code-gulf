import { useTask } from "../contex/TaskContex";
import './style.css'
export default function TaskCard3({task}) {
const {deleteTask} = useTask()


const handelDelete =()=>{
deleteTask(task.id)
} 


return (
    
        <div className="conductor"> 
           <div className='individual'> 
              <h4>{task.conductor}</h4>
             <button className='button-done' onClick={handelDelete} >done</button>
            </div>
        </div>
      
    
  )


}