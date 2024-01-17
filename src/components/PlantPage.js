import React, { useState , useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [ plantsToRen , setPlantsToRen ] = useState([])

  const [ searchValue , setSearchValue ] = useState('')


  function handleSearchChange(e){
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((resp) => resp.json())
    .then((plantArray) => setPlantsToRen(plantArray))
  }, [] )

  // console.log(plantsToRen)


  return (
    <main>
      <NewPlantForm 
      plantsToRen={plantsToRen}
      setPlantsToRen={setPlantsToRen}

       />
      <Search 
      searchValue={searchValue}
      setSearchValue={setSearchValue}

      />
      <PlantList plantsToRen={plantsToRen}  />
    </main>
  );
}

export default PlantPage;
