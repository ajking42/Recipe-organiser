import "../styles/Header.css"
import Navbar from "../components/Navbar";

function Header() {
  return (
    <div className="header">
      <div className="site-title">Recipes</div>
      <Navbar />
    </div>
  );
}

export default Header;
