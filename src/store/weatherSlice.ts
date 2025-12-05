import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchWeatherByCity } from "./fetchWeatherByCity";
import type { Weather } from "../types/weather";

interface InitialState {
    city: Weather['city'] | null;
    cityName: string;
    list: Weather['list'];
    loading: boolean,
    error: null | string;
}

const initialState: InitialState = {
    cityName: 'Yerevan',
    loading: false,
    error: null,
    list: [],
    city: null,
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setCity(state, { payload }: PayloadAction<string>) {
            state.cityName = payload;
        },
    },
    extraReducers: ((builder) => {
        builder.addCase(fetchWeatherByCity.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.list = [];
            state.city = null;
        })
            .addCase(fetchWeatherByCity.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.error = null;
                state.list = payload.list;
                state.city = payload.city;
            })
            .addCase(fetchWeatherByCity.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload as string;
                state.list = [];
                state.city = null;
            });
    })
});

export const { setCity } = weatherSlice.actions;
export default weatherSlice.reducer;