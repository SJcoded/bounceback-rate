import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import ActiveStock from "../components/ActiveStock";
import Chart from "../components/Chart";
import Header from "../components/Header";
import styles from "../styles/pages/Home.module.scss";

const get100DataPoints = () => {
	const peak = 1000;

	const dataPoints = [];
	for (let i = 1; i < 100; i++) {
		const current = peak * (i / 100);
		const gain = peak / current;

		dataPoints.push(gain);
	}
	console.log(dataPoints);
	return dataPoints;
};

const Home: NextPage = () => {
	const apikey = process.env.ALPHA_API;
	const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${apikey}`;

	const [dataPoints, setDataPoints] = useState(get100DataPoints());

	useEffect(() => {
		fetch(url);
		get100DataPoints();
		console.log(apikey);
	}, []);

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
					<Chart data={dataPoints} />
				</div>
			</main>
		</div>
	);
};

export default Home;
