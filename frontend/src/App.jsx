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
 })},[...todos])
  return (
    <div>
      <Createtodo></Createtodo>  
     <Todosadd todos={todos}></Todosadd>
    </div>

  )
}

export default App
