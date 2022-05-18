import React, { useState } from 'react';
import { Component } from 'react/cjs/react.development';
import Computer_vision from './computer_items/Computer_vision';
import Dialogs from './dialogs/Dialogs';
import Header from './components/header';
import { Routes, Route, Link } from "react-router-dom"

const App = (props) => {
  return (
      <div>
        <Header/>
        <Routes>
          <Route path='profile/*' element = {<Computer_vision/>}/>
          <Route path='dialogs/*' element = {< Dialogs data={props.data._state.dialogs} addMes={props.data.addMessage.bind(props.data)} addUs = {props.data.addUsers.bind(props.data)} currC={props.data.currentContact.bind(props.data)} currT={props.data.currentText.bind(props.data)}/>}/>
        </Routes>
      </div>
  );
}

export default App;
