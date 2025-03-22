import { createContext, useState, useContext } from "react";

// Create the context for Dark Mode
const DarkModeContext = createContext();

// Custom hook to use dark mode context
export const useDarkMode = () => useContext(DarkModeContext);

// DarkModeProvider to wrap around the App component and manage dark mode state
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
