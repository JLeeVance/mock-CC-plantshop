import React from "react";

function NewPlantForm({ plantsToRen , setPlantsToRen }) 

{
  function handleNewPlant(e){
    e.preventDefault();
    // console.log(e.target[0].value)
    let newPlantObj = {
      name: e.target[0].value,
      image: e.target[1].value,
      price: e.target[2].value
    }
    fetch("http://localhost:6001/plants" , {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newPlantObj)
    })
    .then((resp) => resp.json())
    .then((newPlantObj) =>  setPlantsToRen([...plantsToRen , newPlantObj]))
    
    // console.log(newPlantObj))

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleNewPlant}>
        <input type="text" name="name"  placeholder="Plant name" />
        <input type="text" name="image"  placeholder="Image URL" />
        <input type="number" name="price"  step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
