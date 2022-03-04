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

function Header() {
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
          <HeaderOption Icon={MenuBookIcon} title='Modules' />
          <HeaderOption Icon={CalendarTodayIcon} title='Calendar' />
          <HeaderOption Icon={GroupsIcon} title='Teams' />
          <HeaderOption Icon={ChatIcon} title='Messages' />
          <HeaderOption Icon={NotificationsIcon} title='Notifications' />
          <HeaderOption avatar="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwoODQ4PDRAPEA8NDQ0NDQ0NDRsNDg0PFRIWFhURExMYKCggGBolGxMVITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOYA2wMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQQFAwIH/8QAMBABAAIABAQEBQQCAwAAAAAAAAECAxESUQQFIZExQWGBIjJxobFCUsHRcuEVYoL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+ogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADxiYtK/NMR+Ve3H4flEz7ZAtil/yNf2z3THMKbWBcFWvHYXrHs7YeNh28LRPv1B0AAAAAAAAAAAAAAAAAABV4zidHSvzT9gdMfiKU8fH9seMqOLxuJbw+GPTx7q0zMznPWQCZAAAAQkBe4DiLTOi3Xp0mfH6L7CiZjwTrtvPcG4MrheKtW0RaZms9J9PWGqAAAAAAAAAAAAAADziXisTM+UZsW1ptMzPjM9WlzG2WHlvMQywSAAAAAAAAACGrwGLqplPjXp7eTLWuW2yvlvE9waYAAAAAAAAAAAAAKPM56U+ss9f5p+j3UASAAAAAAAAAA68HOWJX65fZyesGcr1/wAo/INsAAAAAAAAAAAAAFDmn6PdQaXMq/DE7T1ZwAAAAAAAAAACafNH1j8oe8CM71j/ALQDaAAAAAAAAAAAAAB4xaaqzXeMvdirfMrTqrG0Z+6oAAAAAAAAAAAt8uws7avKv5U1/l+PMzonLKIzjKMsgXwAAAAAAAAAAAAAZ3M4+Ks+kwptPmNM6Z/tnP2ZgAAAAAAAAAAC1y6vx57VlUaPLafDM7zl2BdAAAAAAAAAAAAAB5vXOJjeJhiTGU5T5Tk3XDH4ekxadMapievqDJEJAAAAAAABADY4SuWHWPTNW4DBpaudoifi6TK+AAAAAAAAAAAAAAAADI4vC0XnaesOLT5hh50z86zn7ebLBIAAAAABl9xZ5fh6r5+VYz9/IGhw+HppEbR1+roAAAAAAAAAAAAAAAAAItGcTG8TDDmMpmNpmG6w7znMzvM/kEAAAAAANDlcfDafWI+3+2e0uW/JP+U/iAWwAAAAAAAAAAAAAAAARMxHj0jeQece2VLTtWe7EXeN4qLRpr4fqnf0UwAAAAAAQ0OV26Wj1i38fwoPeDi2paLR7xvANocsDHpeOk9dvN1AAAAAAAAAAAB5vetYzmYj6g9PN71rGdpiI9VLG4/ypH/qf4hSve1pztMz9QXsbmH7Iz9bf0pYmLe3zTM/iHkBCQAAAAAAAAAj0WMPjcWvj8UbT/auA0cPj6T80TX7wtUvW0ZxMT9JzYb1W0xOcTl9AbgzcLj7x80ao38JXcHHpf5Z67T4g6gAAACJlncVxF79KxMV+nWwOvE8bEdKdZ38oUL3tac7TMz69TRbaexottPYECdFtp7Gi209gQJ0W2nsaLbT2BAnRbaexottPYECdFtp7Gi209gQJ0W2nsaLbT2BAnRbaexottPYECdFtp7Gi209gQJ0W2nsaLbT2BAnRbaexottPYEEdPD7J0W2nsaLbT2BaweOtHS3WN/NfwsWt4zrOf5hjaLbT2eqa6znXOJ9IBtDlw2LN65zGU+Ex4dd3UAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q==" title='First' />
        </div>

    </div>
  )
}

export default Header 