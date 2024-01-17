import React, { useState } from "react";


function PlantCard({ name , image, price , id , plantsToRen , setPlantsToRen }) {

  const [ isStocked , setIsStocked ] = useState(true)

  function handleSoldOut(){
    setIsStocked((isStocked) => !isStocked)
  }

  function handleDelete(){
    // console.log(id)
    fetch(`http://localhost:6001/plants/${id}` , {method: "DELETE"})
    let newlyDeletedPlants = plantsToRen.filter((plantObj) => {
      return plantObj.id !== id;
    })
    setPlantsToRen(newlyDeletedPlants);
  }

  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isStocked ? (
        <button onClick={handleSoldOut} className="primary">In Stock</button>
      ) : (
        <button onClick={handleSoldOut} >Out of Stock</button>
      )}
      <button onClick={handleDelete}> Delete From Stock</button>
    </li>
  );
}

export default PlantCard;
