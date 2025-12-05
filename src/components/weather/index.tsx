import { DEFAULT_TEXT } from "../../constants";
import { useAppSelector } from "../../store/useReduxStore";
import type { Weather } from "../../types/weather";
import WeatherCards from "./WeatherCards/WeatherCards";
import MainWeatherCard from "./mainWeatherCard/MainWeatherCard";
import SelectedDate from "./selectedDate/SelectedDate";
import useWeatherLogic from "./useWeatherLogic";
import styles from './weather.module.css';



export default function Weather() {
    const { city, list, loading, error } = useAppSelector(state => state.weather);
    const { selectedDate, selectedDateKey, applied, handleSelectedDate } = useWeatherLogic({ list });

    if (loading) return <p>Loading weather data...</p>;
    if (error) return <p>Error loading weather data: {error}</p>;

    return (
        <div className={styles.weather__list}>
            <h1 className={styles.list__title}>{city?.name || DEFAULT_TEXT}</h1>
            <MainWeatherCard selectedDateKey={selectedDateKey} selectedDate={selectedDate} applied={applied} />
            <SelectedDate selectedDate={selectedDate} />
            <WeatherCards applied={applied} handleSelectedDate={handleSelectedDate} />
        </div>
    );
}
