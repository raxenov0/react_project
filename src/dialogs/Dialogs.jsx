import React from 'react';
import Screen from './Screen/Screen';

const Dialogs = (props) => {
    
    return(
        <div className="content">
            
            <Screen data={props.data} addMes={props.addMes} addUs = {props.addUs} currC={props.currC} currT={props.currT}/>
            
        </div>
        
    );
}
export default Dialogs;