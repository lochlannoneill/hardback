import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@mui/material';
import userEvent from '@testing-library/user-event';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  
  return (
    <div onClick={onClick} className="headerOption">
        {Icon && <Icon className='headerOption__icon' />}
        {/* {avatar && <Avatar className='headerOption__icon' src={avatar} />} */}
        {avatar && (
          <Avatar src={user.picture} className='headerOption__icon'>
            {/* NEEDS UPDATE - shoud be defaulted to a letter if there is no other option */}
            {/* {user.firstname[0]} */}
          </Avatar>
        )}
        
        <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;