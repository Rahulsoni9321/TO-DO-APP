import { useState } from "react";

export function Createtodo() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        onChange={function (e) {
          const value = e.target.value;
          settitle(value);
        }}
        type="text"
        placeholder="Enter title"
      ></input>{" "}
      <br></br>
      <input
        style={{ padding: 10, margin: 10 }}
        onChange={function (e) {
          setdescription(e.target.value);
        }}
        type="text"
        placeholder="Enter description"
      ></input>{" "}
      <br></br>
      <button
        style={{ padding: 10, margin: 10 }}
        onClick={() => {
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
