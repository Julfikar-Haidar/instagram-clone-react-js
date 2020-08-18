import React, { Component } from 'react';

import './Post.css'
import Avatar from '@material-ui/core/Avatar'

function Post({username,caption,imageUrl}){
    return (
        <div className="post">
           <div className="post_header">
           <Avatar
            className="post_avatar"
            alt="Julfikar"
            src="/static/images/avatar/1.jpg"
            />
            <h3>{username}</h3>
           </div>
            {/* header -> avatar+username  */}
            <img src={imageUrl} className="post_image" alt=""/>
            {/* image  */}
            <h4 className="post_text"><strong>{username}</strong>: {caption}</h4>
            {/* username + caption  */}
        </div>
    )
}
 
export default Post;