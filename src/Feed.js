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
          <h3>Create an assignment</h3>
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
        name='Markson William'
        description='Lecturer of CyberSecurity at MTU'
        message="Hi guys, this is the first assignment"
      />
      <Post 
        name='Mateusz Doman'
        description='Student of Software Development at MTU'
        message="What was the homework for Wednesday?"
      />
      <Post 
        name='First3 Last3'
        description='This is a test for the second post'
        message="This is my thrird post"
      />
      <Post 
        name='First4 Last4'
        description='This is a test for the second post'
        message="This is my fourth post"
      />
      <Post 
        name='First5 Last5'
        description='This is a test for the second post'
        message="This is my fifth post"
      />
    </div>
  )
}

export default Feed