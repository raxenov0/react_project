import React from 'react'
import Message from './Messages.module.css';
import Message_item from '../Message_item/message_item';



const Messages = (props) =>{
    let mesRef = React.createRef();


    let addMes_ = () => {
        props.addMes();
        props.currT('')
    }

    let MessageOnChange = () => {
        let text = mesRef.current.value;
        props.currT(text)   
    }
    let MessagesArr = props.data.map((el) => (<Message_item name={el.name} id={el.id} text={el.text}/>));
    return(
        <div className={Message.message}>
            <div className={Message.user}>{props.data[0].name}</div>
            <div className={Message.main_screen_mes}>
           {MessagesArr}

            
                
            </div>
            <div className={Message.menu}>
                    <textarea ref={mesRef} onChange={MessageOnChange} value={props.placeholder} name="message" className={Message.text_} id="" cols="30" rows="2"/>
                    <div className={Message.menu_btn}>
                        <button onClick={addMes_} className={Message.send}>send</button>
                        <button className={Message.add}>additional</button>
                    </div>
                    
                </div>
        </div>
    );
}
export default Messages;