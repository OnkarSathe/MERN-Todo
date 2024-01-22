import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="title"
        onBlur={function (event) {
          setTitle(event.target.value);
        }}
      ></input>
      <br />
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="description"
        onBlur={function (event) {
          setDescription(event.target.value);
        }}
      ></input>
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              contentType: "application/json",
            },
          }).then(async function(res){
            const json = await res.json();
            alert("Todo Added");
          });
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}
