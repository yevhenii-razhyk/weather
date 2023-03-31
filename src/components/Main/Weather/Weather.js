import React, { useState } from 'react'
import { fetchWeather } from '../../../store/reducers/weatherSlice';
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
import Current from './Current/Current'
import Forecast from './Forecast/Forecast'
import Hourly from './Hourly/Hourly'
import Precipitation from './Precipitation/Precipitation'
import styles from "./Weather.module.css"
import Loader from '../../Loader/Loader';
import Error from '../../Error/Error';

const Weather = () => {
    const [isActiveIndex, setIsActiveIndex] = useState(0)
    const [isVisiblePrecipitation, setIsVisiblePrecipitation] = useState(false)
    const dispatch = useDispatch()
    const { loading, weather, error } = useSelector(store => store.weather)
    const { cityCoord } = useSelector(store => store.city)
    useEffect(() => {
        dispatch(fetchWeather(cityCoord))
    }, [cityCoord, dispatch])

    const setActive = idx => {
        setIsActiveIndex(idx)
    }

    if (loading) {
        return (
            <Loader />
        )
    }

    if (error) {
        return (
            <Error />
        )
    }

    if (weather.current && weather.forecast) {
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
}

export default Weather