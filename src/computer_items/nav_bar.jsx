import React from 'react';
import './Computer_vision.css';
import gender from '../images/gender.png';
import age from '../images/age.png';
import emoji from '../images/emoji.png';
import static_ from '../images/static.png';


const nav_bar = () => {
    return(
        <div className="menu">
        <div className="param">
          <span className="param_txt">Параметры</span>
          <div className="optional">
            <div className="setter">
              <img src={gender} alt="" className="gender_img"></img>
            <p className="gender_txt">Пол</p>
            </div>
            
            <label className="checkbox-ios">
              <input type="checkbox"></input>
              <span className="checkbox-ios-switch"></span>
            </label>
          </div>

          <div className="optional">
            <div className="setter">
              <img src={age} alt="" className="gender_img"></img>
              <p className="gender_txt">Возраст</p>
            </div>
              
            <label className="checkbox-ios">
              <input type="checkbox"></input>
              <span className="checkbox-ios-switch"></span>
            </label>
          </div>

          <div className="optional">
            <div className="setter">
              <img src={emoji} alt="" className="gender_img"></img>
              <p className="gender_txt">Эмоции</p>
            </div>
              
            <label className="checkbox-ios">
              
              <input type="checkbox"></input>
              <span className="checkbox-ios-switch"></span>
            </label>
          </div>
           
        </div>
          
    
      <div className="statistic">
        <span className="param_txt">Статистика</span>
            <div className="setter setter_">
              <img src={static_} alt="" className="gender_img"></img>
            <p className="gender_txt">за день</p>
            </div>

            <div className="setter setter_">
              <img src={static_} alt="" className="gender_img"></img>
            <p className="gender_txt">за неделю</p>
            </div>
            
            <div className="setter setter_">
              <img src={static_} alt="" className="gender_img"></img>
              <p className="gender_txt">за месяц</p>
            </div>
          </div>
    </div>
    )
}

export default nav_bar;