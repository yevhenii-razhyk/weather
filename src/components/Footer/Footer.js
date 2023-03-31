import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.footer_text}>Powered by <a className={styles.footer_link} href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a></p>
        </footer>
    )
}

export default Footer