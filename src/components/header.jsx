import React from 'react';
import {header} from '../styles'

 const Header = ({lists}) => {
    return(
        <div>
            
        <div style={header}>
            <h1>Header</h1>
            </div>
            <div>
           {lists}
           </div>
        </div>
    )
}

export default Header