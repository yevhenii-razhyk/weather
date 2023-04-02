import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./Main.module.css"
import Weather from './Weather/Weather'
import Loader from '../Loader/Loader'
import Error from '../Error/Error'
import { fetchWeather } from '../../store/reducers/weatherSlice'

const Main = () => {
    const dispatch = useDispatch()
    const { loading, weather, error } = useSelector(store => store.weather)
    const { cityCoord } = useSelector(store => store.city)
    useEffect(() => {
        dispatch(fetchWeather(cityCoord))
    }, [cityCoord, dispatch])

    return (
        <main className={styles.main}>
            {loading && <Loader width={120} height={120} />}
            {error && <Error error={error} />}
            {weather.error && <Error error={weather.error.message} /> }
            {weather.current && weather.forecast
                ? <Weather weather={weather} />
                : null
            }
        </main>
    )
}

export default Main