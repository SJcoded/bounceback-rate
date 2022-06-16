import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Bounceback Rate</title>
				<meta
					name="Bounceback rate"
					content="Determines how much money you gain when stock rises back to it's peak price"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<div>
					<div className={styles.activeStock}>
						<div className={styles.activeStockIconContainer}>
							<Image src={require("../public/vercel.svg")} />
						</div>
						<div className={styles.activeStockTextContainer}>
							<p>NASDAQ: AAPL</p>
							<h1>Apple Inc.</h1>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;
