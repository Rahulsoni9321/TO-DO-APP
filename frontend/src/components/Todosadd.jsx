import { useState } from "react";


export function Todosadd({todos}){
    // const [status,setstatus]=useState(todos.completed)
    return <div>
      
     {todos.map(function(todo){
        return <div>
        <h2 id="title">{todo.title}</h2>
        <h3 id="description">{todo.description}</h3>
        <button 
        id="todo-button"
        onClick={()=>{
           
             fetch("http://localhost:4000/completed", {
                method: "PUT",
                body: JSON.stringify({
                  _id:todo._id
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              }).then(async function (res) {
                const json = await res.json();
                alert("To do Marked as done.");
              })
           

        }}>{todo.completed==true ? "Completed":"Mark as Complete" }</button>
    </div>
    })}
    </div>
}
    
