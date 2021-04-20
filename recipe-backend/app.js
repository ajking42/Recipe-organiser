const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const recipeScraper = require("recipe-scraper");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/recipeDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);

const RecipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
  instructions: [String],
  image: String,
  source: String,
});

const Recipe = new mongoose.model("Recipe", RecipeSchema);

const port = 5000;

app.get("/getRecipes", (req, res) => {
  Recipe.find({}, (err, recipes) => {
    if (err) {
      console.log("error" + err);
    } else {
      console.log(recipes);
      res.send({ recipes });
    }
  });
});

app.post("/queryRecipeURL", (req, res) => {
  const options = { upsert: true, new: true, setDefaultsOnInsert: true };

  recipeScraper(req.body.url)
    .then((recipe) => {
      let recipeData = {
        name: recipe.name,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        image: recipe.image,
        source: req.body.url,
      };
      Recipe.findOneAndUpdate(
        { source: req.body.url },
        {
          $setOnInsert: { recipeData },
        },
        options,
        (error, result) => {
          if (error) {
            console.log(error);
            return;
          }
        }
      );
      res.send(recipeData);
    })
    .catch((error) => {
      console.log(error);
      res.send(false);
    });
});

app.post("/saveRecipe", (req, res) => {
  
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
