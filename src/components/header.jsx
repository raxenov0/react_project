import React from 'react';
import logo from '../images/logo2.png';
import lc from '../images/lc.png';
import push from '../images/push.png';
import settings from '../images/settings.png'
import { NavLink } from 'react-router-dom';
import classHeader from './Header.module.css'

const header = () => {
    
    return(
        <div class="header">
            <img src={logo} alt="" class="logo_"></img>
            <NavLink to="/profile"  className="link_main" style={({ isActive }) =>({color: isActive ? 'blanchedalmond' : ''})}>Главная</NavLink>
            <NavLink to="/Dialogs"  className="link_main" style={({ isActive }) =>({color: isActive ? 'blanchedalmond' : ''})}>Сообщения</NavLink>
            <NavLink to="/music"  className="link_main" style={({ isActive }) =>({color: isActive ? 'blanchedalmond' : ''})}>Музыка</NavLink>
            <div class="small_imgs">
                <img src={lc} alt="" className="lc_img"></img>
                <img src={push} alt="" className="lc_img"></img>
                <img src={settings} alt="" className="lc_img"></img>
            </div>
        </div>
    );
    
}
export default header;