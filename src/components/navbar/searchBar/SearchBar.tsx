
import { useAppSelector } from '../../../store/useReduxStore';
import useSearchBar from './useSearchBar';
import styles from './SearchBar.module.css';

export default function SearchBar() {
	const { cityName } = useAppSelector((state) => state.weather);
	const { handleChange, handleSearch } = useSearchBar(cityName)

	return (
		<div className={styles.search__bar}>
			<input type="text" placeholder="Search..." value={cityName} onChange={handleChange} />
			<button type='button' onClick={handleSearch}>Search</button>
		</div>
	);
}

