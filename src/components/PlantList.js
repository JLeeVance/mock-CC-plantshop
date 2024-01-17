import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsToRen , searchValue }) {

  const searchedPlants = plantsToRen.filter((plantObj) => {
    if (searchValue === ''){
      return plantObj
    } else {
      return plantObj.name.toLowerCase().includes(searchValue.toLowerCase())
    }
  })



  const plantCards = searchedPlants.map((plantObj) => 
  <PlantCard 
  key={plantObj.id} 
  name={plantObj.name}
  image={plantObj.image}
  price={plantObj.price}
  />
  )




  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
