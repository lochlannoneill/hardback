import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Sidebar.css";

function Sidebar() {

    const user = useSelector(selectUser);

    // const  = {topic} => (
    //     <div className="sidebar__recentItem">
    //         <span className="sidebar__hash">#</span>
    //         <p>{topic}</p>
    //     </div>
    // )

  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://www.amnesty.ie/wp-content/uploads/2016/05/placeholder_2.jpg" alt=""/>
            
            {/* NEEDS UPDATE - allow user to upload profile picture */}
            {/* <Avatar src={user.profilePicture}className="sidebar__avatar">
                {user.firstname[0]}
            </Avatar> */}

            <Avatar className="sidebar__avatar">
                {user.firstname[0]}
            </Avatar>
            <h2>{user.firstname} {user.surname}</h2>
            <h4>{user.email}</h4>
            {/* NEEDS UPDATE - title */}
            <p>Title</p> 
        </div>

        <div className="sidebar__course">
            <p>Course Name</p>
            <p>Course Code</p>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Year</p>
                <p className="sidebar__statValue">##</p>
            </div>
            <div className="sidebar__stat">
                <p>Semester</p>
                <p className="sidebar__statValue">##</p>
            </div>
            <div className="sidebar__stat">
                <p>Registered Modules</p>
                <p className="sidebar__statValue">##</p>
            </div>
            <div className="sidebar__stat">
                <p>Total Credits</p>
                <p className="sidebar__statValue">##</p>
            </div>
        </div>

        {/* <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('MTU')}
            {recentItem('Lochlann O Neill')}
            {recentItem('software')}
            {recentItem('web development')}
            {recentItem('irish')}
        </div> */}

        <div className="sidebar__bottom">
            <p>This is a test module</p>
        </div>

        <div className="sidebar__bottom">
            <p>This is a test module</p>
        </div>

        <div className="sidebar__bottom">
            <p>This is a test module</p>
        </div>

    </div>
  )
}

export default Sidebar