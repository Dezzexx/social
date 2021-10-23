import React, { Component } from 'react';
import cls from "./Navigationbar.module.css";


const Navbar = () => {
    return (
        <navigationbar className={cls.navbar}>
            <div className={cls.item}>
                <a>Main page</a>
            </div>

            <div className={cls.item}>
                <a>feed</a>
            </div>

            <div className={cls.item}>
                <a>Message</a>
            </div>

            <div className={cls.item}>
                <a>Music</a>
            </div>

            <div className={cls.item}>
                <a>Settings</a>
            </div>

        </navigationbar>
    )
}
export default Navbar;
