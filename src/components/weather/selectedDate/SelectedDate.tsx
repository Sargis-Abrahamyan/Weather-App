import { useMemo } from 'react';
import type { Weather } from '../../../types/weather';
import { DateHelper } from '../../../helpers/dateHelpers';
import styles from './selectedDate.module.css';

interface SelectedDateProps {
    selectedDate: Weather['list'] | null;
}

export default function SelectedDate({ selectedDate }: SelectedDateProps) {
    const formattedItems = useMemo(() => {
        if (!selectedDate) return [];
        return selectedDate.map(item => {
            const [date, time] = item.dt_txt.split(' ');
            return {
                key: item.dt,
                formattedDate: DateHelper(date),
                time,
                temp: Math.floor(item.main.temp)
            };
        });
    }, [selectedDate]);

    if (!formattedItems.length) return null;

    return (
        <div className={styles.selected__date}>
            {formattedItems.map(item => (
                <div className={styles.date__item} key={item.key}>
                    <p>{item.formattedDate}</p>
                    <span className={styles.time__item}>{item.time}</span>
                    <span className={styles.temp__item}>{item.temp} °C</span>
                </div>
            ))}
        </div>
    );
}