import React from 'react';
import styles from "./Switch.module.css";

const Switch = ({checked, onChange, first, second}) => {

    return (
        <label className={checked ? `${styles.switch} ${styles.checked}` : styles.switch}>
            <input className={styles.switch_input} type="checkbox" checked={checked} onChange={onChange} />
            <span className={styles.switch_slider} />
            <span className={styles.switch_first}>{first}</span>
            <span className={styles.switch_second}>{second}</span>
        </label>
    )
}

export default Switch