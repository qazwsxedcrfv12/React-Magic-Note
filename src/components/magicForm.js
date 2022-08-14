import React, {useState} from "react";
import { ReactDOM } from "react";
import './magicForm.css';
import Button from "../util/Button";



const MagicForm = (props)=>{

    const [enteredNote, setNote] = useState('');


    // const errorModal = ()=>{
    //     return(
    //         <>Enter something</>
    //     )
    // }
    
    const clickHandler = (e)=>{
        console.log("Clicked")
    }

    const noteChangeHandler = (e)=>{
        console.log(e.target.value)
        setNote(e.target.value)
    }

    const formSubmitHandler = ()=>{
        // if(enteredNote.length == 0)
        //    return errorModal();
        // console.log(enteredNote)
        props.setData(enteredNote);
        setNote('')
    }

    return(
        <>
          <form action="#" className="main-form" onSubmit={formSubmitHandler}>
              <div className="user-form">
              <div>
                  <label htmlFor="text">Enter the Notes</label>
                  <input 
                    type="text" 
                    id="text" 
                    placeholder="Enter the text" 
                    value={enteredNote} 
                    onChange={noteChangeHandler} 
                    disabled={props.errorModalValue}
                    style={{cursor:`${props.errorModalValue} ? 'not-allowded' : 'pointer'`}}
                  />
              </div>
              <div>
                  <Button onclick={clickHandler}>Submit Now</Button>
              </div>
              </div>
          </form>
        </>
    )
}

export default MagicForm;