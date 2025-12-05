import { useCallback, useMemo, useState } from 'react'
import type { Weather } from '../../types/weather';
import type { Applied } from './types';

interface UseWeatherLogicReturn {
    selectedDate: Weather['list'] | null;
    selectedDateKey: string | null;
    applied: Applied[];
    handleSelectedDate: (date: string) => void;
}

interface UseWeatherLogic {
    list: Weather['list']
}

export default function useWeatherLogic({ list }: UseWeatherLogic): UseWeatherLogicReturn {
    const [selectedDate, setSelectedDate] = useState<Weather['list'] | null>(null);
    const [selectedDateKey, setSelectedDateKey] = useState<string | null>(null);

    const groupedByDate = useMemo(() => {
        return list.reduce((acc, item) => {
            const date = item.dt_txt.split(" ")[0];
            acc[date] = acc[date] ? [...acc[date], item] : [item];
            return acc;
        }, {} as Record<string, Weather['list']>);
    }, [list]);

    const applied = useMemo(() => {
        return Object.keys(groupedByDate).map(date => {
            const dayItems = groupedByDate[date];
            const averageTemp = Math.floor(
                dayItems.reduce((sum, item) => sum + item.main.temp, 0) / dayItems.length
            );
            return { date, averageTemp };
        });
    }, [groupedByDate]);

    const handleSelectedDate = useCallback((date: string) => {
        const selectedDateItem = groupedByDate[date];
        setSelectedDate(selectedDateItem);
        setSelectedDateKey(date);
    }, [groupedByDate]);

    return {
        selectedDate,
        selectedDateKey,
        applied,
        handleSelectedDate
    }
}
