import { useTask } from "../contex/TaskContex";
import './style.css'
export default function TaskCard({task}) {
const {deleteTask} = useTask()


const handelDelete =()=>{
deleteTask(task.id)
} 


return (
    
        <div className="primary"> 
           <div className='individual'> 
              <h4>{task.insulation}</h4>
             <button className='button-done' onClick={handelDelete} >done</button>
            </div>
        </div>
      
    
  )


}