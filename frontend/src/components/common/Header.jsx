import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import { useTheme } from "../../hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <header className="bg-primary-100 border-b-2 border-primary-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="pixel-font text-xl">
          abdelghani
        </Link>
        <Navigation />
        <button onClick={toggleTheme} className="retro-button">
          {theme === "dark" ? "LIGHT" : "DARK"}
        </button>
      </div>
    </header>
  );
};

export default Header;
