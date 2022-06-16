import Image from "next/image";
import styles from "../styles/components/SearchBar.module.scss";
import { GoSearch } from "react-icons/go";

type Props = {};

function SearchBar({}: Props) {
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<GoSearch />
			</div>
			<h5>Search</h5>
		</div>
	);
}

export default SearchBar;
