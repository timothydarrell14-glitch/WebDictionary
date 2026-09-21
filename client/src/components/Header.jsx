import { IoBook } from "react-icons/io5";
import "../styles/header.css";
// import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <h1>
        <IoBook /> MyDictionary
      </h1>
      <nav id="navbar-header">
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;
