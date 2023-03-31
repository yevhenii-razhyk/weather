import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { setCityCoord } from "../../store/reducers/cityCoordSlice"
import getCityName from '../../utils/getCityName';
import styles from "./Search.module.css";

const Search = () => {
    const [value, setValue] = useState("")
    const [searchedCity, setSearchedCity] = useState([])
    const [showSearchedCity, setShowSearchedCity] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const changeCity = (lat, lon, name, country) => {
        dispatch(setCityCoord({lat, lon, name, country}))
        setValue("")
        setSearchedCity([])
    }

    const handleChange = e => {
        setValue(e.target.value)
        if (e.target.value) {
            fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${e.target.value}&limit=5&appid=15329a0fa39b7a56125985c2de13197b`)
                .then(res => res.json())
                .then(data => setSearchedCity(data))
        } else {
            setSearchedCity([])
        }
    }

    const hideCities = () => {
        setTimeout(() => {
            setShowSearchedCity(false)
        }, 100)
    }

    return (
        <div className={styles.search}>
            <form className={styles.search_form} onSubmit={(e) => handleSubmit(e)} onFocus={() => setShowSearchedCity(true)} onBlur={() => hideCities()}>
                <SearchOutlinedIcon className={styles.search_icon} />
                <input className={styles.search_input} placeholder='Search city...' value={value} onChange={(e) => handleChange(e)} />
                <ul className={styles.search_results_list}>
                    {
                        showSearchedCity ? (
                            searchedCity.length ? searchedCity.map(city => (
                                <li
                                    className={styles.search_results_list_item}
                                    key={city.lat}
                                    onClick={() => changeCity(city.lat, city.lon, city.name, city.country)}
                                >
                                    {getCityName(city)}
                                </li>
                            )): <li className={styles.search_results_list_item}>No results</li>
                        ) : null
                    }
                </ul>
            </form>
        </div>
    )
}

export default Search