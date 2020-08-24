import React, { useState } from 'react';
import Post from './Post';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    {
      username: "dfuture",
      caption: "This works!!",
      imageUrl: "https://www.dfuture.mx/img/index/dfuture_logo2.png",
    },
    {
      username: "dfuture2",
      caption: "Caption goes here->",
      imageUrl: "https://www.dfuture.mx/img/index/dfuture_logo2.png",
    }
    {},
  ]);

  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      {/* Posts */}
      <Post
        username="dfuture"
        caption="This works!!"
        imageUrl="https://www.dfuture.mx/img/index/dfuture_logo2.png"
      />
      <Post
        username="dfuture2"
        caption="This works!!"
        imageUrl="https://www.dfuture.mx/img/index/dfuture_logo2.png"
      />
      <Post
        username="dfuture3"
        caption="This works!!"
        imageUrl="https://www.dfuture.mx/img/index/dfuture_logo2.png"
      />
    </div>
  );
}

export default App;
