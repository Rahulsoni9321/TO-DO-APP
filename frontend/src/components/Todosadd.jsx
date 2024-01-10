import { useState } from "react";


export function Todosadd({todos}){
    const [status,setstatus]=useState(todos.completed)
    return <div>
     {todos.map(function(todo){
        return <div>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
        <button onClick={()=>{
            if (todo.completed==false) {
             fetch("http://localhost:4000/todo", {
                method: "POST",
                body: JSON.stringify({
                  completed:true
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              }).then(async function (res) {
                const json = await res.json();
                alert("To do Marked as done.");
              })
              setstatus(true)
            }
             else {
                fetch("http://localhost:4000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                      completed:false
                    }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }).then(async function (res) {
                    const json = await res.json();
                    alert("To do is not completed.");
                  })
                  setstatus(false)
             }
        }}>{todo.completed==status ? "Completed":"Mark as Complete" }</button>
    </div>
    })}
    </div>
}
    
