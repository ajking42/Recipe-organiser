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
});

const Recipe = new mongoose.model("Recipe", RecipeSchema);

const port = 5000;

app.get("/hello", (req, res) => {
  res.send("hello!");
});

app.post("/saveNewRecipe", (req, res) => {
  recipeScraper(req.body.url)
    .then((recipe) => {
      const newRecipe = new Recipe({
        name: recipe.name,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        image: recipe.image,
      });

      newRecipe.save();
      res.send("Successfully recieved recipe url");

    })
    .catch((error) => {
      console.log(error);
      res.send("Unsupported URL")
    });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
