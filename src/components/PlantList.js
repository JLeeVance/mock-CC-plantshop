import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsToRen }) {

  const plantCards = plantsToRen.map((plantObj) => 
  <PlantCard 
  key={plantObj.id} 
  name={plantObj.name}
  image={plantObj.image}
  price={plantObj.price}
  />)


  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
