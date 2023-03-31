import React from 'react'
import dayjs from "dayjs"
import styles from "./Current.module.css"
import convertTime12to24 from "../../../../utils/convertTime12to24"

const Current = ({ current, astro }) => {
    return (
        <div className={styles.current}>
            <div className={styles.current_top}>
                <span className={styles.current_top_day}>{dayjs(Date.now()).format("dddd")}</span>
                <span className={styles.current_top_time}>{dayjs(Date.now()).format("HH:mm")}</span>
            </div>
            <div className={styles.current_main}>
                <div className={styles.current_main_left}>
                    <span className={styles.current_temp}>{Math.round(current.temp_c)}°</span>
                    <span>
                        <span className={styles.current_label}>Feals like: </span>
                        <span className={styles.current_value}>{Math.round(current.feelslike_c)}°</span>
                    </span>
                    <span>
                        <span className={styles.current_label}>Wind: </span>
                        <span className={styles.current_value}>{Math.round(current.wind_kph * 0.277777778)} m/s</span>
                    </span>
                    <span>
                        <span className={styles.current_label}>Pressure: </span>
                        <span className={styles.current_value}>{Math.round(current.pressure_in * 25.4)}</span>
                    </span>
                    <span>
                        <span className={styles.current_label}>Humidity: </span>
                        <span className={styles.current_value}>{current.humidity}%</span>
                    </span>
                </div>
                <div className={styles.current_main_right}>
                    <div className={styles.current_image_box}>
                        <img className={styles.current_icon} src={current.condition.icon} alt={current.condition.text} />
                    </div>
                    <span>
                        <span className={styles.current_label}>Sunrise: </span>
                        <span className={styles.current_value}>{convertTime12to24(astro.sunrise)}</span>
                    </span>
                    <span>
                        <span className={styles.current_label}>Sunset: </span>
                        <span className={styles.current_value}>{convertTime12to24(astro.sunset)}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Current