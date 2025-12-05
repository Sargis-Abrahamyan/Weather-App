import SearchBar from './searchBar/SearchBar.tsx';
import styles from './navbar.module.css'

export default function Navbar() {
	return (
		<header id={styles.navBar}>
			<SearchBar />
		</header>
	)
}
