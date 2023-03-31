import React from 'react'
import dayjs from "dayjs"
import styles from "./ForecastItem.module.css"

const ForecastItem = ({day, index, activeIndex, setActive}) => {
    const active = activeIndex === index ? true : false

    return (
        <label className={active ? `${styles.forecast_item} ${styles.active}` : styles.forecast_item} onClick={() => setActive(index)}>
            <div className={styles.forecast_top}>
                <span className={styles.forecast_top_day}>{dayjs(Number(day.date_epoch + "000")).format("ddd")}</span>
            </div>
            <div className={styles.forecast_main}>
                <div className={styles.forecast_image_box}>
                    <img className={styles.forecast_icon} src={day.day.condition.icon} alt={day.day.condition.text} />
                </div>
                <span className={styles.forecast_min_temp}>{Math.round(day.day.mintemp_c)}°</span>
                <span className={styles.forecast_max_temp}>{Math.round(day.day.maxtemp_c)}°</span>
            </div>
        </label>
    )
}

export default ForecastItem