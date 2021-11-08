import cls from './message.module.css';
import React from 'react';

const Message = (props) => {
    return <div className={cls.dialog}>{props.message}</div>
}
export default Message;