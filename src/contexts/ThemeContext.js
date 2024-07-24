import { useState, createContext, useContext  } from "react";

const ThemeContext = createContext();
export function useThemeContext(){
    return useContext(ThemeContext);
}

const ThemeUpdateContext = createContext();
export function useThemeUpdateContext(){
    return useContext(ThemeUpdateContext);
}

function ThemeContextProvider({children}) {

  const [isLightTheme, setIsLightTheme] = useState(true);

  function toggleTheme(){
    setIsLightTheme(!isLightTheme);
  }

  return (
    <ThemeContext.Provider value={isLightTheme}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
            {children}
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider