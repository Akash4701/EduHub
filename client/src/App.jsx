import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Component from "./upload"
import Login from './Login';
import Logout from './Logout';



function App() {
 

  return (
    <Router>
      <Routes>
      <Route path="/sign-up" element={<Component/>}/>


    
        <Route path="/" element={<Login/>}/>
         {/* <Route path="/sign-up" element={<Component/>}/> */}
        <Route path="/Login" element={<Login/>}/>
        <Route/>
        </Routes>
     
      
    </Router>
  );
}

export default App;