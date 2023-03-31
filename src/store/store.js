import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./reducers/weatherSlice";
import cityCoordSlice from "./reducers/cityCoordSlice";

const store = configureStore({
    reducer: {
        weather: weatherSlice,
        city: cityCoordSlice
    }
})

export default store