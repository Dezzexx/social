import React from 'react';
import cls from "./Navigationbar.module.css";


const Navbar = () => {
    return (
        <navigationbar className={cls.navbar}>
            <div className={cls.item}>
                <a href= "/Profile"> Main page </a>
            </div>

            <div className={cls.item}>
                <a href="/Feeds"> feed</a>
            </div>

            <div className={cls.item}>
                <a href="/Dialogs"> Message</a>
            </div>

            <div className={cls.item}>
                <a href="/Musics"> Music</a>
            </div>

            <div className={cls.item}>
                <a href="/Settings"> Settings</a>
            </div>

        </navigationbar>
    )
}
export default Navbar;
