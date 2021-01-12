import React from 'react';
import classes from './Friend.module.css'
const Friend = (props) =>
{

    return(
        <div>
            <div className={classes.grid}>
            <div className={classes.cell1}><img src = "https://sun9-12.userapi.com/c850608/v850608803/1b7811/-grqeTQHWcQ.jpg" />{props.name}</div>
                </div>
        </div>
    )
}

export default Friend;