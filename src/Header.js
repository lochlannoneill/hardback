import React from 'react';
import './Header.css';
import logo from './images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupsIcon from '@mui/icons-material/Groups';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';

function Header() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  };

  return (
    <div className='header'>

        <div className="header__left">
          <img src={logo} alt="logo"/>

          <div className="header__search">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search Hardback"
            />
          </div>
        </div>

        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title='Home' />
          {/* <HeaderOption Icon={MenuBookIcon} title='Modules' /> */}
          <HeaderOption Icon={MenuBookIcon} title='Notes' />
          <HeaderOption Icon={CalendarTodayIcon} title='Calendar' />
          {/* <HeaderOption Icon={GroupsIcon} title='Teams' /> */}
          <HeaderOption Icon={ChatIcon} title='Messages' />
          {/* <HeaderOption Icon={NotificationsIcon} title='Notifications' /> */}
          <HeaderOption
            avatar={true}
            title={user.firstname}
            // NEEDS UPDATE - dropdown menu for sign out
            onClick={logoutOfApp}
          />
        </div>

    </div>
  )
}

export default Header 