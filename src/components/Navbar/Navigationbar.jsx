import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from "./Navigationbar.module.css";


const Navbar = () => {
    return (
        <navigationbar className={cls.navbar}>
            <div className={cls.item}>
                <NavLink to="/Profile" activeClassName={cls.activeLink}> Main page </NavLink>
            </div>

            <div className={cls.item}>
                <NavLink to="/Feeds" activeClassName={cls.activeLink}> feed </NavLink>
            </div>

            <div className={cls.item}>
                <NavLink to="/Dialogs" activeClassName={cls.activeLink}> Message</NavLink>
            </div>

            <div className={cls.item}>
                <NavLink to="/Musics" activeClassName={cls.activeLink}> Music</NavLink>
            </div>

            <div className={cls.item}>
                <NavLink to="/Settings" activeClassName={cls.activeLink}> Settings</NavLink>
            </div>

        </navigationbar>
    )
}
export default Navbar;
