import React from 'react';
import cls from './dialogitem.module.css';
import { NavLink } from 'react-router-dom';


const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={cls.dialog}>
            <NavLink to={path} activeClassName={cls.activeLink}> {props.name} </NavLink>
        </div>
    )
}
export default DialogsItem;