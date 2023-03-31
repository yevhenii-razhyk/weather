import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cityCoord: {
        lat: 47.6933814,
        lon: 32.5106596,
        name: "Novyi Buh",
        country: "UA"
    }
}

const cityCoordSlice = createSlice({
    name: "city-coord",
    initialState,
    reducers: {
        setCityCoord(state, action) {
            state.cityCoord = action.payload
        }
    }
})

export const { setCityCoord } = cityCoordSlice.actions
export default cityCoordSlice.reducer