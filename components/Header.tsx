import styles from "../styles/components/Header.module.scss";
import Image from "next/image";
import SignInButton from "./SignInButton";

type Props = {};

function Header({}: Props) {
	return (
		<header className={styles.header}>
			<h4 className={styles.logo}>BBR</h4>
			<SignInButton />
		</header>
	);
}

export default Header;
