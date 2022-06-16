import useSWR from "swr";
import { Stock, StockData } from "../types/stock";

export async function getStockData<StockData>(stock: Stock) {
	const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stock.symbol}&interval=${stock.interval}&apikey=${process.env.REACT_APP_ALPHAVANTAGE_API_KEY}`;
	const res = await fetch(url);
	const data = await res.json();

	const entries = data["Time Series (60min)"];

	// --- Highest Price ---
	let highestArray: Array<{ value: number; date: Date }> = [];
	for (let hour in data["Time Series (60min)"]) {
		const highestPrice = data["Time Series (60min)"][hour]["2. high"];
		highestArray.push({ value: +highestPrice, date: new Date(hour) });
	}
	const highestValue = Math.max(...highestArray.map((x) => x.value));
	const highestValueDate = highestArray.find(
		(x) => x.value === highestValue,
	)?.date;

	// --- Current Price ---
	const lastEntry = entries[Object.keys(entries)[0]];
	const currentValue: number = +lastEntry["4. close"];
	const currentValueDate: Date = new Date(Object.keys(entries)[0]);

	// --- Bounceback Rate ---
	const bouncebackRate: number = +(
		(highestValue / currentValue) *
		100
	).toFixed(0);

	const stockData: StockData = {
		bouncebackRate,
		highestValue,
		highestValueDate,
		currentValue,
		currentValueDate,
	};

	return stockData;
}
