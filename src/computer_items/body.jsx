import React from 'react';
import './Computer_vision.css';
import broadcast from '../images/broadcast.png';

const body = (props) => {
  
    return(
      <div class="webcam_static">
        <div class="broadcast">
          <img src={broadcast} alt="" class="webcam_broadcast"></img>
        </div>
        <div class="main_info">
          <div class="values param">
            <span class="param_txt">Значения</span>
            <div class="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia quaerat quos voluptate, vero ea placeat assumenda esse itaque ut ducimus 
              nisi harum eum sequi nam saepe consectetur, obcaecati optio?
            </div>
          </div>
          <div class="statistic_info param">
            <span class="param_txt">{props.message} {props.likes}</span>
            <div class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facilis magnam praesentium neque facere voluptate consequuntur atque amet inventore 
              placeat animi quas cum at numquam mollitia quod, quia alias maiores!</div>
          </div>
        </div>
      </div>
    ); 
}
export default body;