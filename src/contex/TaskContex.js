import {  createContext, useContext} from "react";
import { useState } from "react";
import { supabase } from "../supabase/Client"
export const TaskContext = createContext()


export const useTask = () =>{
    const context = useContext(TaskContext)
    if(!context) console.log("no existe este elemnto")
    return context
}
export const TaskContextProvider = ({children})=>{

    const [tasks, setTasks] =  useState([])
    const [adding, setAdding] = useState(false)

    const getTasks = async()=>{
        
        //const user = supabase.auth.user()
       const {error, data} = await supabase
       .from("cv3")
       .select()
    ///  .eq("userId", user.id)
       //.eq("done", done)
       .order("id", {accending: true});
       if(error) throw error;
       setTasks(data)
       
      } 
   //getTasks()
  ///creamos un task y esperamos que getTask nos retorne la tarea con nuestro id
  const createTask = async (taskName, taskName2, taskName3)=>{
    setAdding(true)
    try{
     // const user = supabase.auth.user()
      const {error, data} = await supabase.from("cv3").insert({
          
          insulation:taskName,
          conductor: taskName2,
          shielf:taskName3
         // userId : user.id
      })
      if (error)throw error;
      setTasks([...tasks, ...data])
    
   }catch(error){
      console.log(error)
   }finally{
    setAdding(false)
   }
  
  }
//////////////////delete task///////////////////////
const deleteTask = async (id)=>{
    const {error, data} = await supabase.from("cv3")
    .delete()
    .eq("id", id)
    if(error) throw error;
    setTasks(tasks.filter((tasks) => tasks.id !== id))

  }
  
  
    return  < TaskContext.Provider value={{tasks,createTask, 
    adding,  getTasks, deleteTask }}>
        {children}
    </TaskContext.Provider>
}