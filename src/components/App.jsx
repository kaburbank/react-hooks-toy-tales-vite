import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
import ToyCard from "./ToyCard";

function App() {
  // State to track whether to show the ToyForm
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  // Fetch toys from the server when the component mounts
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      })
      .catch((error) => {
        console.error("Error fetching toys:", error);
      });
  }, []);// Empty dependency array ensures this runs once on mount

  // Function to toggle the display of the ToyForm
  function handleClick() {
    setShowForm((showForm) => !showForm);
  };

  // Function to add a new toy to the state
  function addToy(newToy) {
    setToys([...toys, newToy]);
  };

  // Function to delete a toy from the state
  function deleteToy(toyId) {
    setToys(toys.filter(toy => toy.id !== toyId));
  };

  // Function to update the likes of a toy in the state
  function updateToyLikes(toyId, newLikes) {
    setToys(toys.map(toy => 
      toy.id === toyId ? { ...toy, likes: newLikes } : toy
    ));
  };

  // Render the components
  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toys} 
        onDeleteToy={deleteToy}
        onUpdateToyLikes={updateToyLikes}
      />
    </>
  );
}

export default App;