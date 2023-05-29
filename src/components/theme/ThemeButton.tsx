import React from 'react'
import { FaMoon, FaRegMoon } from 'react-icons/fa'
import './themeButton.css'
type themeProps= {
    theme:string;
    toggleTheme:(newTheme:string)=>void;
}
const ThemeButton = ({ theme = "light", toggleTheme }: themeProps) => {

    
  return (
    <div className='theme'>
          {theme === "light" 
          ? <button onClick={()=>toggleTheme('dark')}><FaRegMoon /> <span>Light Mode</span></button> 
          : <button onClick={()=>toggleTheme('light')}><FaMoon /> <span>Dark Mode</span></button>}
    </div>
  )
}

export default ThemeButton