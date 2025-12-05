import { FORECAST } from '../../../constants';
import { setCity } from '../../../store/weatherSlice';
import { fetchWeatherByCity } from '../../../store/fetchWeatherByCity';
import { useAppDispatch, useAppSelector } from '../../../store/useReduxStore';
import styles from './SearchBar.module.css';

export default function SearchBar() {
	const { cityName } = useAppSelector((state) => state.weather);
	const dispatch = useAppDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setCity(e.target.value));
	};

	const handleSearch = async () => {
		await dispatch(fetchWeatherByCity({ city: cityName, type: FORECAST }));
	}

	return (
		<div className={styles.search__bar}>
			<input type="text" placeholder="Search..." value={cityName} onChange={handleChange} />
			<button type='button' onClick={handleSearch}>Search</button>
		</div>
	);
}

