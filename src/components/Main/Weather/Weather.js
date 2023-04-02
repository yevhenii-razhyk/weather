import React, { useState } from 'react'
import Current from './Current/Current'
import Forecast from './Forecast/Forecast'
import Hourly from './Hourly/Hourly'
import Precipitation from './Precipitation/Precipitation'
import styles from "./Weather.module.css"

const Weather = ({ weather }) => {
    const [isActiveIndex, setIsActiveIndex] = useState(0)
    const [isVisiblePrecipitation, setIsVisiblePrecipitation] = useState(false)


    const setActive = idx => {
        setIsActiveIndex(idx)
    }

    return (
        <div className={styles.weather}>
            <div className={styles.weather_top}>
                <Current current={weather.current} astro={weather.forecast.forecastday[0].astro} />
                <Forecast forecast={weather.forecast.forecastday} isActiveIndex={isActiveIndex} setActive={setActive} />
            </div>
            <Hourly hour={weather.forecast.forecastday[isActiveIndex].hour} setIsVisible={setIsVisiblePrecipitation} />
            <Precipitation hour={weather.forecast.forecastday[isActiveIndex].hour} isVisible={isVisiblePrecipitation} setIsVisible={setIsVisiblePrecipitation} />
        </div>
    )
}

export default Weather