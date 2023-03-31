import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import dayjs from 'dayjs';
import Switch from "../../../Switch/Switch"
import styles from "./Precipitation.module.css"

const Precipitation = ({ hour, isVisible, setIsVisible }) => {
    const [checked, setChecked] = useState(false)
    const [precType, setPrecType] = useState("rain")
    const handleChange = () => {
        setChecked(!checked)
        precType === "rain" ? setPrecType("snow") : setPrecType("rain")
    }
    return (
        isVisible 
        ?
            <div className={styles.background} onClick={() => setIsVisible(false)}>
                <div className={styles.precipitation} onClick={e => e.stopPropagation()}>
                    <div className={styles.precipitation_header}>
                        <span className={styles.title}>{dayjs(Number(hour[0].time_epoch + "000")).format("DD MMMM")}</span>
                        <Switch checked={checked} onChange={handleChange} first={"Rain"} second={"Snow"} />
                        <button className={styles.close} onClick={() => setIsVisible(false)}>
                            <CloseIcon />
                        </button>
                    </div>
                    <div className={styles.precipitation_box}>
                        <div className={styles.line_one}></div>
                        <div className={styles.line_two}></div>
                        <div className={styles.line_three}></div>
                        <div className={styles.timeline}>
                            {
                                precType === "rain"
                                    ?
                                    hour.map(hour => (
                                        <span key={Math.random()} className={styles.hour}>
                                            {dayjs(Number(hour.time_epoch + "000")).format("HH:mm")}
                                            <span style={{ height: `${hour.chance_of_rain * 2 || 1}px` }}></span>
                                        </span>
                                    ))
                                    :
                                    hour.map(hour => (
                                        <span key={Math.random()} className={styles.hour}>
                                            {dayjs(Number(hour.time_epoch + "000")).format("HH:mm")}
                                            <span style={{ height: `${hour.chance_of_snow * 2 || 1}px` }}></span>
                                        </span>
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </div> 
        :   null
    )
}

export default Precipitation