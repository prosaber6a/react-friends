import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Friends.css';
const Friends = (props) => {
  
    
    const {name, phone, username, email, image, salary} = props.user;
    return (
    <div>
        <div className="row">
            <div className="col-md-4 col-4">
                <img className="user-img" src={image} alt={username}/>
            </div>
            <div className="col-md-8 col-8">
                <p className="lead">{name}</p>
                <p>Username: {username} | Email: {email} <br/> Phone: {phone} | Yearly Salary: ${salary}</p>
                <button className="btn btn-primary" onClick={() => props.handleFriends(props.user)}><FontAwesomeIcon icon={faPlus} /> Add Friend</button>
            </div>
            
        </div>
        <hr className="my-4" />
    </div>
        
        
        
    );
};

export default Friends;