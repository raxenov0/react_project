import React from 'react';
import Messages from '../Messages/Messages';
import Dialog_user from '../Dialog_user/Dialog_user';
import screen from './Screen.module.css';
const Screen = (props) => {
    return(
        <div className={screen.container}>
            <Dialog_user dispatch = {props.dispatch}/>
            <Messages dispatch = {props.dispatch}/>
        </div>
    );
}
export default Screen