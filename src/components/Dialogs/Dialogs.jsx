import React from 'react';
import cls from './Dialogs.module.css';
import Message from './Messages/message';
import DialogsItem from './DialogsItem/dialogitem';
import MMessages from './Messages/MyMessages/mymessages';


const Dialogs = (props) => {

    let dialogsElement = props.state.DialogsBlock.map(d => < DialogsItem id={d.id} name={d.name} />);
    let messages = props.state.Messages.map(m => < Message id={m.id} message={m.message} />);
    let MyMessages = props.state.MyMessages.map(m => < MMessages id={m.id} message={m.message} />);
    let messageElement = React.createRef();
    let sendmessage = () => {
        let text = messageElement.current.value;
        alert(text);
    }
    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={cls.messages}>
                {messages}
                <div>
                    <textarea ref={messageElement}></textarea>
                    <button onClick={sendmessage}>send</button>
                </div>
            </div>
            <div className={cls.Mymessages}>
                {MyMessages}
            </div>
        </div >
    )
}
export default Dialogs;