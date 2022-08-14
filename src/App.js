import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import TopHeader from './header/topHeader';
import MagicForm from './components/magicForm';
import ResultTile from './components/resultTile';
import ErrorModal from './errorModal';

function App() {

  const notesData = ['This is first note']

  const [renderNotesData, setNotesData] = useState(notesData)
  const [errorModal, setErrorModal] = useState(false);

  const dataHandler = (data)=>{
    // console.log("In app.js", data)
     if(data == '')
       setErrorModal(true)
     else
       setNotesData((preNote)=>{return [data, ...preNote];})
  }

  return (
      <>
         {errorModal && <ErrorModal onClick={()=>setErrorModal(false)}/>}
         <TopHeader/>
         <MagicForm setData={dataHandler} errorModalValue={errorModal}/>
         <ResultTile data={renderNotesData}/>
         {/* {errorModal && <ErrorModal onClick={()=>setErrorModal(false)}/>} */}
         {/* <h1>Magic Note is going to build</h1> */}
      </>
  );
}

export default App;
