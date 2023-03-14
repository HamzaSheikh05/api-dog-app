import { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
export const Header = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header>
      <nav className="flex justify-between p-4 items-center bg-slate-100 h-20 dark:bg-dark-bg">
        <h1 className="text-2xl text-blue-300 font-burtons font-semibold animate-pulse">
          DevelopedByHS
        </h1>
        <ul className="flex gap-16">
          <NavLink className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-burtons rounded-lg text-sm p-2 text-center w-20">
            <button type="button">Home</button>
          </NavLink>
          <NavLink className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-burtons rounded-lg text-sm p-2 text-center w-20">
            <button type="button">Latest</button>
          </NavLink>
          <NavLink className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-burtons rounded-lg text-sm p-2 text-center w-20">
            <button type="button">Contact</button>
          </NavLink>
        </ul>
        <BsFillMoonStarsFill
          className="text-2xl text-blue-300 animate-pulse"
          onClick={() => setDarkMode(!darkMode)}
        />
      </nav>
    </header>
  );
};
