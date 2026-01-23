import React from "react";
import ToyCard from "./ToyCard";

// ToyContainer component to display a collection of ToyCards
function ToyContainer({ toys, onDeleteToy, onUpdateToyLikes }) {
  // Map over the toys array to create ToyCard components
  const toyCards = toys.map((toy) => (
    <ToyCard 
      key={toy.id} 
      toy={toy} 
      onDeleteToy={onDeleteToy}
      onUpdateToyLikes={onUpdateToyLikes}
    />
  ));

  // Render the ToyContainer component
  return (
    <div id="toy-collection">{toyCards}</div>
  );
};

export default ToyContainer;
