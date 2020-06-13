import React from 'react';

const Summary = (props) => {
    const friends = props.friends;
    const totalIncome = friends.reduce((total, friend) => total + Number(friend.salary), 0);
    
    return (
        <div>
            <h4>Total Friends : {friends.length}</h4>
            <h4>All Friend Yearly Income: ${totalIncome}</h4>
        </div>
    );
};

export default Summary;