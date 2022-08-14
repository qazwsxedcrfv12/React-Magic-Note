import React from 'react';
import ReactDOM from 'react-dom';

import './Button.css';

const Button = (props) =>{

    return(
        <button className='util-button' onClick={props.onclick}>{props.children}</button>
    )
}

export default Button;