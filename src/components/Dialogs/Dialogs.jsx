import React from 'react';
import cls from './Dialogs.module.css';
import Message from './Messages/message';
import DialogsItem from './DialogsItem/dialogitem';
import { DialogsBlock } from '../..';
import { Messages } from '../..';


const Dialogs = (props) => {

    let dialogsElement = DialogsBlock.map(d => < DialogsItem id={d.id} name={d.name} />);
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