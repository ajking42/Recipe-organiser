import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import Axios from "axios";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  function getRecipes() {
    Axios.get("http://localhost:5000/getRecipes").then((response) => {
      setRecipes(response.data.recipes);
    });
  }

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      {recipes.map((recipeItem) => (
        <RecipeCard name={recipeItem.name} image={recipeItem.image} />
      ))}
    </div>
  );
}

export default RecipeList;
