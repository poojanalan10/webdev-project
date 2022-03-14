import "./Navbar.css";
import React from "react";
import { useState, useEffect } from "react";
import { MenuItems } from "./MenuItems";
const NavBar = () => {
  const [toggleNavigationBar, settoggleNavigationBar] = useState(false);
  const [screeWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    settoggleNavigationBar(!toggleNavigationBar);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <nav className="navbar">
      {(toggleNavigationBar || screeWidth > 600) && (
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cname} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      )}
      <button className="btn" onClick={toggleNav}>
        Menu
      </button>
    </nav>
  );
};
export default NavBar;
