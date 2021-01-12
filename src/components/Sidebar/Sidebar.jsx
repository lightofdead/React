import React from 'react';
import Friend from "./Friend/Friend";



const Sidebar = (props) =>
{
    let friendElements = props.state.sideBar.friends.map(friend => <Friend name = {friend.name}/>)
    return(
        <div>
            <div> FRIENDS </div>
            <div>{friendElements}</div>
        </div>
    )
}

export default Sidebar ;