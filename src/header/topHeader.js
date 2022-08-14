import React from "react";
import ReactDOM from "react";
import './topHeader.css';
// import CardHeader from '@mui/material/CardHeader';

const TopHeader = (props)=>{
    return(
        <>
           <div className="main-header">
               <div className="main-list">
                   <ul className="list-content">
                       <li>Home</li>
                       <li>About Us</li>
                       <li>Documentation</li>
                       <li>Contact</li>
                   </ul>
               </div>
               <div className="serach-header">
                  <label htmlFor="search">Search</label>
                  <input type="text" id="search" placeholder="Search here"/>
               </div>
           </div>
        </>
    )
}

export default TopHeader;

