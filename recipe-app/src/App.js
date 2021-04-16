import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  const App = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
  `;

  const Main = styled.div`
    flex: 1 0 auto;
    padding: 10px;
  `;

  return (
    <App>
      <a href="/" className="toggle-button">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <Router>
        <Header />
        <Main>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </Main>
      </Router>
      <Footer />
    </App>
  );
}

export default App;
