import React from 'react';
import Nav_bar from './nav_bar';
import Body from './body';
import './Computer_vision.css';
import './../reset.css';
import state from './../redux/state'

let renderPage  = () => {
    console.log();
}

export const empty_fun = (observer) =>{
    renderPage = observer;
}

let obj_men = {
    name: "ROman",
    age: 22,
    current_data: "22.02.2022"
}

let refObj = React.createRef();

let addData = () =>{
    let data = refObj.current.value;
    obj_men.data = data;
    obj_men.current_data = '';
    renderPage(state);
} 

let currentData = () => {
    let data = refObj.current.value;
    obj_men.current_data = data;
    renderPage(state)
}

const Computer_vision = () => {
    return (
        <div>
            <div className="container"> 
            <div className="main_screen">

            <Nav_bar/>
            <Body message="Статистика" likes="5"/>

        </div>
        </div>
        <input ref = {refObj} onChange = {currentData} type="text"value={obj_men.current_data}></input>
        <button onClick={addData}>Knock</button>
      </div>
    );
}
export default Computer_vision;