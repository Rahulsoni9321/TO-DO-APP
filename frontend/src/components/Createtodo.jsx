import { useState } from "react";

export function Createtodo() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  return (
    <div>
      <input
      className="create"
        
        onChange={function (e) {
          const value = e.target.value;
          settitle(value);
        }}
        type="text"
        placeholder="Enter title"
      ></input>{" "}
      <br></br>
      <input
        className="create"
        onChange={function (e) {
          setdescription(e.target.value);
        }}
        type="text"
        placeholder="Enter description"
      ></input>{" "}
      <br></br>
      
      <button
        id="create-button"

        onClick={() => {
          const trimmedTitle = title.trim();
          const trimmedDescription = description.trim();
      
          // Check if both title and description are not empty
          if (!trimmedTitle || !trimmedDescription) {
            alert("Title and description cannot be empty");
            return;
          }
          fetch("http://localhost:4000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("To do added Successfully.");
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
