import React from 'react';
import Messages from '../Messages/Messages';
import Dialog_user from '../Dialog_user/Dialog_user';
import screen from './Screen.module.css';
const Screen = (props) => {
    return(
        <div className={screen.container}>
            <Dialog_user plc_contact = {props.data.Current_contact} currC={props.currC} data={props.data.Users} addUs = {props.addUs}/>
            <Messages data={props.data.MessagesUser}  placeholder={props.data.Current_text} addMes = {props.addMes} currT={props.currT} />
        </div>
    );
}
export default Screen