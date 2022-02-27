import React, { useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PollIcon from '@mui/icons-material/Poll';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Post from './Post';
import { PostAddSharp } from '@mui/icons-material';

function Feed() {
  const [posts, setPosts] = useState([]);

  const sendPost = e => {
    e.preventDefault();

  }

  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                  <input type="text" />
                  <button onClick={sendPost} type="submit">Post</button>
                </form>
            </div>

            <div className="feed__inputOptions">
              <InputOption Icon={ImageIcon} title='photo'/>
              <InputOption Icon={VideoLibraryIcon} title='video'/>
              <InputOption Icon={PollIcon} title='poll'/>
              <InputOption Icon={ScheduleIcon} title='schedule'/>
            </div>
        </div>

      {/* Posts */}
      {/* {posts.map((post)) => {
        <Post />
      } */}
      <Post 
        name='First Last'
        description='This is a test'
        message="WOW this worked"
      />

    </div>
  )
}

export default Feed