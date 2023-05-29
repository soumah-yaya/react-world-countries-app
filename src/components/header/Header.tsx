import { useState, useEffect } from 'react'
import { ThemeButton } from '../'
import { saveData, getData } from '../../helpers'
import {  Link } from 'react-router-dom'
import './header.css'

const Header = () => {
    const [theme, setTheme] = useState('light')
    const currentTheme = (newTheme: string) => {
        setTheme(newTheme)
        document.body.setAttribute("data-theme", newTheme)
    }

    const toggleTheme = (newTheme: string) => {
        currentTheme(newTheme)        
        saveData('theme', newTheme)
    }
    // set theme onload
    useEffect(() => {
        let theme = getData('theme')
        if (theme) {
            currentTheme(theme)
            
        }
    }, [])

    return (
        <header className='header-wrapper'>
            <div className='container header'>
                <Link to='/' className="logo">
                    <h1>Where in the world?</h1>
                </Link>
                <div >
                    <ThemeButton theme={theme} toggleTheme={toggleTheme} />
                </div>
            </div>
        </header>
    )
}

export default Header