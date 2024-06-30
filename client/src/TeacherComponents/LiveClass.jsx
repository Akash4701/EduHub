import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CreatedAssign from './createdAssign';
import '../StudentApp.css';
import { Outlet } from "react-router-dom";
import AgoraVideoCall from "../components/AgoraVideoCall";
import Poll from "../components/Poll";
import QnA from "../components/QnA";

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
      <AgoraVideoCall/>
      <QnA/>
      {/* <div className='liveclass'> 
      
     
     
      </div> */}
      
    </div>
  )
}

export default MyAssign;