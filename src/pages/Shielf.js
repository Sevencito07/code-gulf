import { useTask } from "../contex/TaskContex";
import './style.css'
export default function TaskCard2({task}) {
const {deleteTask} = useTask()


const handelDelete =()=>{
deleteTask(task.id)
} 


return (
    
        <div className="shielf"> 
           <div className='individual'> 
              <h4>{task.shielf}</h4>
             <button className='button-done' onClick={handelDelete} >done</button>
            </div>
        </div>
      
    
  )


}