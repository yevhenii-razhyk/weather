import React from 'react'
import dayjs from 'dayjs'
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "./Hourly.module.css"

const Hourly = ({ hour, setIsVisible }) => {
    return (
        <div className={styles.box}>
            <div className={styles.hourly_top}>
                <h4 className={styles.title}>{dayjs(Number(hour[0].time_epoch + "000")).format("DD MMMM")}</h4>
                <div className={styles.show_precip} onClick={() => setIsVisible(true)}>
                    <ExpandMoreIcon />
                    <span>Show precipitation chance</span>
                </div>
            </div>
            <div className={styles.hourly}>
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <td>Time</td>
                            {
                                hour.map(hour => (
                                    <td key={hour.time_epoch}>{dayjs(Number(hour.time_epoch + "000")).format("HH:mm")}</td>
                                ))
                            }
                        </tr>
                        <tr>
                            <td>Temp</td>
                            {
                                hour.map(hour => (
                                    <td key={Math.random()}>{Math.round(hour.temp_c)}°</td>
                                ))
                            }
                        </tr>
                        <tr>
                            <td><CloudOutlinedIcon fontSize='large' /></td>
                            {
                                hour.map(hour => (
                                    <td key={Math.random()}><img src={hour.condition.icon} alt={hour.condition.text} /></td>
                                ))
                            }
                        </tr>
                        <tr>
                            <td>F.L.</td>
                            {
                                hour.map(hour => (
                                    <td key={Math.random()}>{Math.round(hour.feelslike_c)}°</td>
                                ))
                            }
                        </tr>
                        <tr>
                            <td>Wind m/s</td>
                            {
                                hour.map(hour => (
                                    <td key={Math.random()}>{Math.round(hour.wind_kph * 0.277777778)}</td>
                                ))
                            }
                        </tr>
                        <tr>
                            <td>
                                Wind deg
                            </td>
                            {
                                hour.map(hour => (
                                    <td key={Math.random()}>
                                        <ArrowUpwardIcon sx={{ transform: `rotate(${hour.wind_degree - 180}deg)` }} />
                                    </td>
                                ))
                            }
                        </tr>
                        <tr>
                            <td>Gust m/s</td>
                            {
                                hour.map(hour => (
                                    <td key={Math.random()}>{Math.round(hour.gust_kph * 0.277777778)}</td>
                                ))
                            }
                        </tr>
                        <tr>
                            <td>Humidity %</td>
                            {
                                hour.map(hour => (
                                    <td key={Math.random()}>{hour.humidity}</td>
                                ))
                            }
                        </tr>
                        <tr>
                            <td>Cloud %</td>
                            {
                                hour.map(hour => (
                                    <td key={Math.random()}>{hour.cloud}</td>
                                ))
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Hourly