import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, BrowserRouter as Router } from "react-router-dom";
import RecipeList from "./pages/RecipeList";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main">
          <Route path="/" exact component={Home}></Route>
          <Route path="/recipelist" exact component={RecipeList}></Route>
          <Route path="/about" component={About}></Route>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
