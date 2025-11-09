import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext); // get theme & toggle

  return (
    <div
  className={`min-h-screen flex flex-col items-center justify-center ${ theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
  }`}
>

      <h1 className="text-3xl font-bold mb-6">Hello, this is {theme} mode!</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
