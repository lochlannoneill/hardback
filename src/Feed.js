import React, { useEffect, useState } from 'react'
import './Feed.css'
import { useSelector } from 'react-redux';
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
import { selectUser } from './features/userSlice';

function Feed() {
  const user = useSelector(selectUser);

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
      firstname: user.firstname,
      surname: user.surname,
      description: user.email,
      message: input,
      picture: user.picture,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("");
  };

  // function auto_grow(element) {
  //   element.style.height = "5px";
  //   element.style.height = (element.scrollHeight)+"px";
  // }

  return (
    <div className='feed'>
        <div className="feed__inputContainer">
          <div className="feed__inputField">
            <Avatar className="feed_avatar" src={user.picture}>
              {user.firstname[0]}
            </Avatar>
            
            <div className="feed__input">
                {/* <CreateIcon /> */}
                <form>
                  <textarea
                    value={input}
                    // oninput={auto_grow}
                    // contenteditable="true"
                    // onkeyup="textAreaAdjust(this)"
                    onChange={e => setInput(e.target.value)}
                    type="text"
                    placeholder="What's on your mind?">
                    {/* aria-autocomplete="list"
                    aria-controls="typeaheadDropdownWrapped-1" */}
                  </textarea>
                  <button
                    onClick={sendPost}
                    type="submit">
                      Post
                  </button>
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
      {posts.map(({id, data: {firstname, surname, description, message, picture } }) => (
        <Post 
          key={id}
          firstname={firstname}
          surname={surname}
          description={description}
          message={message}
          picture={picture}
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