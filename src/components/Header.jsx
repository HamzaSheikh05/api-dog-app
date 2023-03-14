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
      <nav className="flex justify-between p-4 items-center bg-custom-bg h-20 dark:bg-dark-bg">
        <h1 className="text-2xl text-gray-200 font-burtons font-semibold animate-pulse dark:text-orange-300">
          DevelopedByHS
        </h1>
        <ul className="flex gap-16">
          <NavLink
            to="/"
            className="text-white dark:bg-gradient-to-r dark:from-red-500 dark:to-yellow-500 bg-gradient-to-r from-gray-800 to-gray-400 hover:bg-gradient-to-bl font-burtons rounded-lg text-sm p-2 text-center w-20"
          >
            <button type="button">Home</button>
          </NavLink>
          <NavLink
            to="/latest"
            className="text-white dark:bg-gradient-to-r dark:from-red-500 dark:to-yellow-500 bg-gradient-to-r from-gray-800 to-gray-400 hover:bg-gradient-to-bl font-burtons rounded-lg text-sm p-2 text-center w-20"
          >
            <button type="button">Latest</button>
          </NavLink>
          <NavLink
            to="/contact"
            className="text-white dark:bg-gradient-to-r dark:from-red-500 dark:to-yellow-500 bg-gradient-to-r from-gray-800 to-gray-400 hover:bg-gradient-to-bl font-burtons rounded-lg text-sm p-2 text-center w-20"
          >
            <button type="button">Contact</button>
          </NavLink>
        </ul>
        <BsFillMoonStarsFill
          className="text-2xl text-gray-200 animate-pulse dark:text-orange-300"
          onClick={() => setDarkMode(!darkMode)}
        />
      </nav>
    </header>
  );
};
