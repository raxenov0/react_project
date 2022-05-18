import React from 'react'
import { NavLink } from 'react-router-dom'
import users from './Dialog_user.module.css'




const DialogItem = (props) => {
    return(
        <NavLink to={''+props.id} className={users.user}>
            <img src={props.img_url} alt="" />
            <span>{props.name}</span>
        </NavLink>
    );
}
const Dialog_user = (props) =>{

    let refName = React.createRef();

    let newContact = () =>{
        props.dispatch({type:'add-users'});
        props.dispatch({type:'current-contact',contact_text:''});
    }

    let onChangeContact = () => {
        let contact = refName.current.value;
        props.dispatch({type:'current-contact',contact_text: contact});
    }
    let newArr = props.dispatch({type:'get-state'}).dialogs.Users.map((el)=>(<DialogItem name={el.name} id={el.id} img_url={el.img}/>))
    return(
        <div className={users.users_contain}>
            <div className={users.header}>Users</div>

            <div className={users.search_container}>
                    <input className={users.search} ref={refName} onChange={onChangeContact} value={props.dispatch({type:'get-state'}).dialogs.Current_contact} type="text" placeholder="Искать здесь..."></input>
                    <button className={users.btn_search} onClick={newContact} type="submit"></button>
            </div>



            {/* <div className={users.search_container}>
                <input id="search"   placeholder="Ольга Михаиловна..." type="search"/>
                <button  className={users.icon}><i className={users.fa+' '+users.fa_search}></i></button>
            </div> */}

            {/* <div className={users.div_new_cont}>
                <input ref={refName} onChange={onChangeContact} value={props.dispatch({type:'get-state'}).dialogs.Current_contact} type="text"/>
                <button  className={users.new_cont}>New contact</button>
            </div> */}
            
            <div className={users.list_user}>
                {newArr}
            </div>
        </div>
    );
}
export default Dialog_user;