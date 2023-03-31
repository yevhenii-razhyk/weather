import React from 'react'
import ForecastItem from './ForecastItem/ForecastItem'
import styles from "./Forecast.module.css"

const Forecast = ({ forecast, isActiveIndex, setActive }) => {
    return (
        <div className={styles.forecast}>
            {
                forecast.map((day, index) => (
                    <ForecastItem key={day.date_epoch} day={day} index={index} activeIndex={isActiveIndex} setActive={setActive} />
                ))
            }
        </div>
    )
}

export default Forecast