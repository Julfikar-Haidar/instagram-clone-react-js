import React, { useState,useEffect } from 'react';
import './App.css';
import logo from './logo.png'
import Post from './Post'
import react from './react.png'
import { db } from './firebase';

function App() {
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot=> {
      setPosts(snapshot.docs.map(doc=> doc.data()))
    });
  },[])
  return (
    <div className="App">

      <div className="app_header">
        <img src={logo} className="app_headerImage" alt="" />
      </div>
      <h1>Hello Julfikar,what's going on programming.....! Lets build an instagram clone </h1>
    
    {
      posts.map(post => (
        <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
  ))
    }
    {/* post */}
    {/* post */}
    </div>
  );
}

export default App;
