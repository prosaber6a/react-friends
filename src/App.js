import React, { useState } from 'react';
import './App.css';
import './Bootstrap.css';
import userData from './userdata/user.js';
import Friends from './Components/Friends/Friends';
import Summary from './Components/Summary/Summary';
function App() {
  const users = [...userData];
  const [friends, setFriends] = useState([]);
  const handleFriends = (friend) => {
    const newFriend = [...friends, friend];
    setFriends(newFriend);
  }

  return (
    <div className="jumbotron">
      <h1 className="display-4">Hello, World</h1>
      <p className="lead">Welcome to my friend list</p>
      <hr className="my-4" />
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-8 friends-container">
            {
              users.map(user => <Friends handleFriends={handleFriends} user={user}></Friends>)
            }
            
          </div>
          <div className="col-md-4 col-4">
            <Summary friends={friends}></Summary>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
