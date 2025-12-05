import { useMemo } from 'react';
import type { Applied } from '../types';
import type { Weather } from '../../../types/weather';
import { DateHelper } from "../../../helpers/dateHelpers";
import { analyzeOpenWeatherDayHelper } from '../../../helpers/analyzeOpenWeatherDayHelper';
import styles from './mainWeatherCard.module.css';

interface MainWeatherCardProps {
    selectedDateKey: string | null;
    selectedDate: Weather['list'] | null;
    applied: Applied[]
}

export default function MainWeatherCard({ selectedDateKey, selectedDate, applied }: MainWeatherCardProps) {
    const externalSelectedDate = applied.find((item) => item.date === selectedDateKey);

    const weatherType = useMemo(() => {
        return selectedDate ? analyzeOpenWeatherDayHelper(selectedDate) : null;
    }, [selectedDate]);

    return (
        <div className={styles.weatherCard}>
            {externalSelectedDate && weatherType && (
                <div className={styles.weatherContent}>
                    <p className={styles.weatherDate}>{DateHelper(externalSelectedDate.date)}</p>
                    <p className={styles.weatherType}>{weatherType}</p>
                    <span className={styles.weatherTemp}>{externalSelectedDate.averageTemp} °C</span>
                </div>
            )}
        </div>
    )
}
