import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Createtodo } from './components/Createtodo'
import { Todosadd } from './components/Todosadd'


function App() {
 const [todos,setTodos]=useState([]);
 useEffect(()=>{fetch("http://localhost:4000/todos")
 .then(async function(response){
  const json=await response.json();
  setTodos(json.todos);
 })},[todos])
  return (
    <div className='container'>
      <center><h1 id='header'># TO Do Application.</h1></center>
      <Createtodo></Createtodo>
      <br></br>
      <hr style={{marginLeft:5}}></hr> 
      <br></br> 
      <center><h2 id='heading'>~ To Do List.</h2></center>
      <br></br>
     <Todosadd todos={todos}></Todosadd>
     
    </div>

  )
}

export default App
