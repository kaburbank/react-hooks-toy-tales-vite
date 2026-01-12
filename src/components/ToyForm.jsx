import React, { useState } from "react";

// ToyForm component to handle adding new toys
function ToyForm({ onAddToy }) {
  // State to track form inputs
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        likes: 0,
      }),
    })
    // process the response and update the toy list
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      onAddToy(data);
      setName("");
      setImage("");
    })
    // handle errors during toy creation
    .catch((error) => {
      console.error("Error creating toy:", error);
    });
  };
  
  // Render the ToyForm component
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
};

export default ToyForm;
