import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    weather: {},
    error: ""
}

const fetchWeather = createAsyncThunk('weather/fetchWeather', (city) => {
    return fetch(`https://api.weatherapi.com/v1/forecast.json?key=60c50d68c9174941903141841231903   &q=${city.lat},${city.lon}&days=7&aqi=no&alerts=no`)
    .then(response => response.json())
}) 

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchWeather.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.loading = false
            state.weather = action.payload
            state.error = ""
        })
        builder.addCase(fetchWeather.rejected, (state, action) => {
            state.loading = false
            state.weather = {}
            state.error = action.error.message
        })
    }
})

export { fetchWeather }
export default weatherSlice.reducer