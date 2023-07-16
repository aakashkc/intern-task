
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Service from "./pages/Services";

function App() {
  return (
  <div>

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Navigate to ="/service" /> } />
    <Route path="/service" element={<Service /> }/>
  
    


  </Routes>
  
  
  
  </BrowserRouter>    
    </div>
  )
}

export default App
