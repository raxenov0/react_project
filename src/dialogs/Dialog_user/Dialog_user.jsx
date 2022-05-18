import React from 'react'
import { NavLink } from 'react-router-dom'
import users from './Dialog_user.module.css'




const DialogItem = (props) => {
    return(
        <NavLink to={"dialogs/" + props.id} className={users.user}>{props.name}</NavLink>
    );
}
const Dialog_user = (props) =>{

    let refName = React.createRef();

    let newContact = () =>{
        props.addUs();
        props.currC('');
    }

    let onChangeContact = () => {
        let contact = refName.current.value;
        props.currC(contact);
    }
    let newArr = props.data.map((el)=>(<DialogItem name={el.name} id={el.id}/>))
    return(
        <div className={users.users_contain}>
            <div className={users.header}>Users</div>
            <div className={users.div_new_cont}>
                <input ref={refName} onChange={onChangeContact} value={props.plc_contact} type="text"/>
                <button onClick={newContact} className={users.new_cont}>New contact</button>
            </div>
            
            <div className={users.list_user}>
                {newArr}
            </div>
        </div>
    );
}
export default Dialog_user;