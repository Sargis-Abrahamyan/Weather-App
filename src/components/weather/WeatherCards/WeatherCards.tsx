import { memo } from "react";
import { DateHelper } from "../../../helpers/dateHelpers";
import styles from './card.module.css';
import type { Applied } from "../types";

interface CardProps {
    applied: Applied[]
    handleSelectedDate: (date: string) => void;
}

function WeatherCards({ applied, handleSelectedDate }: CardProps) {
    return (
        <div className={styles.card__Container}>
            {applied.map(({ averageTemp, date }, index) => (
                <div className={styles.card} key={index} onClick={() => handleSelectedDate(date)}>
                    <h3 className={styles.temp}>{averageTemp} °C</h3>
                    <p className={styles.time}>{DateHelper(date)}</p>
                </div>
            ))}
        </div>
    )
}

export default memo(WeatherCards);
