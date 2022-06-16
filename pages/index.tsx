import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import ActiveStock from "../components/ActiveStock";
import Chart from "../components/Chart";
import Header from "../components/Header";
import styles from "../styles/pages/Home.module.scss";
import { getStockData } from "../utils/stockApi";
import { Stock } from "../types/Stock";

const Home: NextPage = () => {
	const [dataPoints, setDataPoints] = useState([1, 9]);
	const [data, setData] = useState({});

	useEffect(() => {
		const stock: Stock = {
			symbol: "AAPL",
			interval: "60min",
		};
		console.log(
			getStockData(stock).then((data) => {
				console.log(data);
			}),
		);
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
					<Chart dataPoints={dataPoints} />
				</div>
			</main>
		</div>
	);
};

export default Home;
