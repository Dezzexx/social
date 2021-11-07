import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from './Dialogs.module.css';

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;

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

    let Dialogs = [
        { id: '1', name: 'Natasha' },
        { id: '2', name: 'Andrey' },
    ]

    let Messages = [
        { id: '1', message: 'Привет' },
        { id: '2', message: 'Че делаешь?' },
    ]

    let dialogsElement = Dialogs.map(d => < DialogsItem id={d.id} name={d.name} />);
    let messages = Messages.map(m => < Message id={m.id} message={m.message} />);
    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={cls.messages}>
                {messages}
            </div>
        </div >
    )
}
export default Dialogs;