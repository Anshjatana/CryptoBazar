import React, { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { themeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(themeContext);
  return (
    <div className=" p-2 ">
      {theme === "dark" ? (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          <HiSun className="text-primary text-2xl mr-2 " /> Light mode
        </div>
      ) : (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          <HiMoon className="text-primary text-2xl mr-2 " /> Dark mode
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
