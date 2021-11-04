import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from './Dialogs.module.css';

const DialogsItem = (props) => {
    let path = "/dialog/" + props.id;

    return (
        <div className={cls.dialog + ' ' + cls.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={cls.dialog}>{props.message}</div>
}


const Dialogs = (props) => {
    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItems}>
                <DialogsItem name="Natasha" id="1" />
                <DialogsItem name="Olga" id="2" />
                <DialogsItem name="Andrey" id="3" />
                <DialogsItem name="Alexei" id="4" />
            </div>
            <div className={cls.messages}>
                <Message message="Привет" />
                <Message message="Че делаешь?" />
            </div>
        </div >
    )
}
export default Dialogs;