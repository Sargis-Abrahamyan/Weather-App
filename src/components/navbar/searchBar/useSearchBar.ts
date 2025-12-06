import { fetchWeatherByCity } from '../../../store/fetchWeatherByCity';
import { FORECAST } from '../../../constants';
import { useAppDispatch } from '../../../store/useReduxStore';
import { setCity } from '../../../store/weatherSlice';

interface UseSearchBarReturn {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearch: () => void;
}

export default function useSearchBar(cityName: string): UseSearchBarReturn {
    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setCity(e.target.value));
    };

    const handleSearch = async () => {
        await dispatch(fetchWeatherByCity({ city: cityName, type: FORECAST }));
    }

    return {
        handleChange,
        handleSearch
    }
}
