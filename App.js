import GetCode from "./pages/GetCode";
import Code from "./pages/Code";
import {Routes, Route} from "react-router-dom"
import './pages/style.css'

import { TaskContextProvider } from "./contex/TaskContex";


function App() {
  

  return (
    <>
      <TaskContextProvider>
      <Routes>
        <Route path="/" element={<Code/>} /> 
        <Route path="/get" element={<GetCode />} />
        
      </Routes>
      </TaskContextProvider>
    </>
  );
}

export default App;