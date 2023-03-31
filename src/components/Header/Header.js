import React, { useState, useEffect } from 'react'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Location from '../Location/Location'
import Search from '../Search/Search'
import Switch from '../Switch/Switch'
import styles from "./Header.module.css"

const Header = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        theme === "light" ? setChecked(false) : setChecked(true)
    }, [theme])

    const switchTheme = () => {
        if (theme === "light") {
            saveTheme("dark")
        } else {
            saveTheme("light")
        }
    }

    const saveTheme = theme => {
        setTheme(theme)
        setChecked(!checked)
        localStorage.setItem("theme", theme)
        document.documentElement.setAttribute("data-theme", theme)
    }

    return (
        <header className={styles.header}>
            <a href="https://www.weatherapi.com/" title="Free Weather API">
                <img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0" />
            </a>
            <Location />
            <div className={styles.search}>
                <Search />
            </div>
            <div className={styles.switch}>
                <Switch checked={checked} onChange={switchTheme} first={<LightModeOutlinedIcon />} second={<DarkModeIcon />} />
            </div>
        </header>
    )
}

export default Header