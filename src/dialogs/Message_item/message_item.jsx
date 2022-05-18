import React from 'react'
import message from './Message_item.module.css'

const Message_item = (props) => {
    return(
        <div className={message.mes + ' '+( props.id === 0 ? message.my_mes : '')}  >
           {props.name}: {props.text}  
        </div>
    );
}
export default Message_item;