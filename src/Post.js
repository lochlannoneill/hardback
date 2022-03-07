import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import Reaction from "./Reaction"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

function Post({ firstname, surname, description, message, picture}) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar 
          className="post_Avatar"
          src={picture}>{firstname[0]}
        </Avatar>
          <div className="post__info">
            <h2>{firstname} {surname}</h2>
            <p>{description}</p>
          </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <Reaction Icon={ThumbUpOffAltIcon}/>
        <Reaction Icon={CommentIcon}/>
        <Reaction Icon={ShareIcon}/>
      </div>


    </div>

  )
}

export default Post