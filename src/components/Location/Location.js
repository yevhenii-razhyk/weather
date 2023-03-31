import React from 'react'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { useSelector } from 'react-redux';
import styles from "./Location.module.css";

const Location = () => {
    const { cityCoord } = useSelector(store => store.city)

    return (
        <div className={styles.location}>
            <FmdGoodIcon className={styles.location_icon} />
            <p className={styles.location_city}>
                {cityCoord.name},
                <span className={styles.location_country}>{cityCoord.country}</span>
            </p>
        </div>
    )
}

export default Location