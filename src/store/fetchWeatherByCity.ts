import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, API_KEY } from '../config/apiConfig';
import { FORECAST } from './../constants/index';
import type { Weather } from '../types/weather';

interface FetchWeatherArgs {
    city: string;
    type?: typeof FORECAST ;
}

export const fetchWeatherByCity = createAsyncThunk(
    'weather/fetchByCity',
    async (arg: FetchWeatherArgs, { rejectWithValue }) => {
        const URL: string = `${API_URL}${arg.type ?? 'weather'}?q=${arg.city || 'Yerevan'}&appid=${API_KEY}&units=metric`;

        try {
            const response = await fetch(URL);
            const data = await response.json() as Weather;
            console.log(data, 'data');

            return data;
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);
