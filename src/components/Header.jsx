import React, {useState} from "react";
import { Link } from "react-router-dom";
import logoBrand from "../assets/cabinet-logo.svg";

function Header () {

  const [open, setOpen] = useState(false);

  const handleClick = () =>{
    open ? setOpen(false) : setOpen(true);
  }

  return (
    <header>
      <h1>
        <Link to="/" title="Cabi.net">
          <img className="logo" src={logoBrand} alt="cabi.net" />
        </Link>
      </h1>
      <div className="navbar">
        <input
          className="search"
          type="text"
          placeholder="🔎 Je recherche..."
        />
        <nav className="menu">
          {/* <input id="menu-toggle" className="menu-toggle" type="checkbox" onClick={handleClick} /> */}
          <button className="menu-toggle" onClick={handleClick}>
            <span className={open ? "hidden" : "shown"}>☰</span>
            <span className={open ? "shown" : "hidden"}>❌</span>
          </button>
          <ul className={open ? "menu-list" : "hidden"}>
            <li>
              <Link to="/" title="categorie">
                categorie1
              </Link>
            </li>
            <li>
              <Link to="/" title="categorie">
                categorie2
              </Link>
            </li>
            <li>
              <Link to="/" title="categorie">
                categorie3
              </Link>
            </li>
            <li>
              <Link to="/" title="categorie">
                categorie4
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
