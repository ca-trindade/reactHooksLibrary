import {useContext} from "react";
import {ThemeContext} from "./../hooks/useContext.jsx"


const HelloWorld = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <>
            <div style={{
                backgroundColor: theme === "light" ? "ghostwhite" : "darkgray",
            }}>
                <h2 style={{
                    color: theme === "light" ? "darkgray" : "whitesmoke",
                }}>Hello World {theme.toLocaleUpperCase()}</h2>
            </div>
            <button onClick={() => toggleTheme()} style={{
                width: "150px"
            }}>Change Theme</button>
        </>
    )
};

export default HelloWorld;