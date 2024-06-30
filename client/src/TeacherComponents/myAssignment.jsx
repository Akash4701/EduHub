import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CreatedAssign from './createdAssign';
import '../StudentApp.css';
import { Outlet } from "react-router-dom";

function MyAssign() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
     <Header OpenSidebar={OpenSidebar}/>
      
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Outlet/>
      <CreatedAssign/>
    </div>
  )
}

export default MyAssign;