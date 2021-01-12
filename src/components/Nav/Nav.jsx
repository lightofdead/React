import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Nav =(props) => {

    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to="/profile" activeClassName={classes.active} > Profile </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/dialogs" activeClassName={classes.active}> Messages </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/news" activeClassName={classes.active}> News </NavLink>
        </div>
        <div className={classes.item} activeClassName={classes.active}>
            <NavLink to="/music"> Music </NavLink>
        </div>
        <div className={classes.MainFriends}>
            <Sidebar state = {props.state}/>
        </div>
    </nav>

}

export default Nav;