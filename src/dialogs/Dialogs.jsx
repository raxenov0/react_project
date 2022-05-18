import React from 'react';
import Screen from './Screen/Screen';

const Dialogs = (props) => {
    return(
        <div className="content">
            
            <Screen dispatch={props.dispatch}/>
            
        </div>
        
    );
}
export default Dialogs;