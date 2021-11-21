import cls from './mymessages.module.css';
import React from 'react';

const MMessages = (props) => {
    return <div className={cls.messages}>{props.message}</div>
}
export default MMessages;