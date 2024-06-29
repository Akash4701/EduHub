import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Component from "./upload"
import Student from "./Student"
import Login from './Login';
import Logout from './Logout';



function App() {
 

  return (
    <Router>
      <Routes>
      <Route path="/Teach" element={<Teacher/>} />
      <Route path="/Stud/:studentId/Voca" element={<Vocab/>}/>

    
        <Route path="/" element={<Login/>}/>
         <Route path="/sign-up" element={<Component/>}/>
         <Route path="/Stud/:studentId" element={<Student/>} />
        <Route path="/Login" element={<Login/>}/>
        
        <Route/>
        </Routes>
     
      
    </Router>
  );
}

export default App;