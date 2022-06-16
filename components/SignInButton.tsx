import Image from "next/image";
import styles from "../styles/components/SignInButton.module.scss";

type Props = {};

const SignInButton = ({}: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<Image
					src={require("../public/icons/GOOG.svg")}
					alt="Google logo"
				/>
			</div>
			<h5>Sign in</h5>
		</div>
	);
};

export default SignInButton;
