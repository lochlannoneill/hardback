import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import Reaction from './Reaction';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PollIcon from '@mui/icons-material/Poll';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Post from './Post';
import { db } from "./firebase"
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import { Avatar } from '@mui/material';

function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => (
        setPosts(snapshot.docs.map(doc => (
          {
            id: doc.id,
            data: doc.data(),
          }
        )))
    ))
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: 'Lochlann O Neill',
      description: 'Admin at Hardback',
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("");
  };

  return (
    <div className='feed'>
        <div className="feed__inputContainer">
          <div className="feed__inputField">
            <Avatar className="feed_inputAvatar"/>
            <div className="feed__input">
                <CreateIcon />
                <form>
                  <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                  <button onClick={sendPost} type="submit">Post</button>
                </form>
            </div>
          </div>
          <div className="feed__reactions">
            <Reaction Icon={ImageIcon} title='photo'/>
            <Reaction Icon={VideoLibraryIcon} title='video'/>
            <Reaction Icon={PollIcon} title='poll'/>
            <Reaction Icon={ScheduleIcon} title='schedule'/>
          </div>
        </div>

      <hr></hr>

      {/* Posts */}
      {posts.map(({id, data: {name, description, message, photoUrl } }) => (
        <Post 
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
      
      {/* <Post 
        name='Markson William'
        description='Lecturer of CyberSecurity at MTU'
        message="Hi guys, this is the first assignment. I need to attach a link to the assignment brief here."
      />
      <Post 
        name='Mateusz Doman'
        description='Student of Software Development at MTU'
        message="What was the homework for Wednesday?"
      /> */}

    </div>
  )
}

export default Feed;