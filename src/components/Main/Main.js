import React from 'react'
import styles from "./Main.module.css"
import Weather from './Weather/Weather'

const Main = () => {
    return (
        <main className={styles.main}>
            <Weather />
        </main>
    )
}

export default Main