import React from "react";
import styled from 'styled-components';
import './errorModal.css';

const Paradiv = styled.p`
    font-weight: 100;
    color: black;
`


const ErrorModal = props=>{
    return(
        <div className="error-modal">
            <Paradiv>PLease enter some valid input!!</Paradiv>
            <span 
              style={{borderRadius:'50%', backgroundColor:'black', color:'whitesmoke', padding:'12px', cursor:'pointer'}}
              onClick={props.onClick}
              >&times;</span>
        </div>
    )
}

export default ErrorModal;