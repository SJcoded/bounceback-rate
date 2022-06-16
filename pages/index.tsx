import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ActiveStock from "../components/ActiveStock";
import Graph from "../components/Graph";
import Header from "../components/Header";
import styles from "../styles/pages/Home.module.scss";

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
			<Header />
			<main className={styles.main}>
				<div className={styles.leftColumn}>
					<ActiveStock
						exchange="NASDAQ"
						stockLogo="google"
						stockName="Google Ltd"
						stockSymbol="GOOGL"
					/>
					<p>Currently viewed</p>
				</div>
				<div className={styles.rightColumn}>
					<Graph />
				</div>
			</main>
		</div>
	);
};

export default Home;
