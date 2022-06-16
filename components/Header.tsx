import styles from "../styles/components/Header.module.scss";
import Image from "next/image";
import SignInButton from "./SignInButton";
import SearchBar from "./SearchBar";

type Props = {};

function Header({}: Props) {
	return (
		<header className={styles.header}>
			<h4 className={styles.logo}>BBR</h4>
			<SearchBar />
			<SignInButton />
		</header>
	);
}

export default Header;
