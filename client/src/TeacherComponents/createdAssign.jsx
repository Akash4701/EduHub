import React, { useState, useEffect } from 'react';
import './createdAssign.css';
import { NavLink } from 'react-router-dom';
export default function CtreatedAssign(){
    const [username,setUsername]=useState('');
    const [assignments,setAssignments]=useState([]);
    useEffect(() => {
        const teachU = localStorage.getItem("teacherUsername");
        setUsername(teachU);
        async function fetchData(){
            const response = await fetch(`http://localhost:8000/api/v1/teachers/getOneTeacher/${teachU}`);
            const curr = await response.json();
            console.log("currrr",curr.data.assignments);
            setAssignments(curr.data.assignments);
        }
        fetchData();
    }, []);


    return(<>
    <div className="createdAssign">
    <h1>Created Assignments</h1>
    {assignments.map((assign,index)=>(
        <div className='assignmentCard' key={index}>
        <h2>Title : {assign.title}</h2>
        <p>Date: {assign.deadline}</p>
        <p>{assign.description}</p>
        {assign.solution.length>0&&<h2 style={{color:'green'}}>Solution : </h2>}
        {assign.solution.map((s)=>(
            <div className='solutionAssign'>
            <i class="fa-solid fa-file-pdf"></i> <NavLink to={s.url}>{s.student.fullName}_{s.student.createdAt}.pdf</NavLink>
            </div>
        ))}
        </div>
    ))}
    </div>
    </>)
}