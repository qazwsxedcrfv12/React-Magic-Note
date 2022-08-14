import React from "react";
import './resultTile.css';
import MagicNote from "./magicNote";
import Carousel from 'react-elastic-carousel'



const ResultTile = props=>{
    return(
        <div className="result-tile">
           {/* <MagicNote data={props.data}/> */}
           <Carousel>
           {props.data.map(data=>(
               <MagicNote data={data}/>
           ))
           }
           </Carousel>
           {/* {props.data.map(data=>(
               <MagicNote data={data}/>
           ))
           } */}
        </div>
    )
}

export default ResultTile;