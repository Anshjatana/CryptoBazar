import React, {useState,useEffect, createContext} from 'react';


const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }
    }
    return 'dark'; 
};

export const themeContext = createContext();

export const ThemeProvider = ({initialTheme,children}) => {
    const [theme, setTheme] = useState(getInitialTheme)

    const rawSetTheme = (theme) => {
        const root = window.document.documentElement;
        const isDark = theme === 'dark';
        
        root.classList.remove(isDark ? 'Light' : 'dark')
        root.classList.add(theme)

        localStorage.setItem('color-theme', theme)

    }
    if(initialTheme){
        rawSetTheme(initialTheme)
    }
    useEffect(()=>{
        rawSetTheme(theme)
    },[theme])

    return (
        <themeContext.Provider value={{theme,setTheme}}>
            {children}
        </themeContext.Provider>
    )
}




