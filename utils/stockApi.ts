import useSWR from "swr";
import { Stock, StockData } from "../types/stock";

export async function getRecentStockData<StockData>(
	stock: Stock,
): Promise<StockData> {
	const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stock.symbol}&interval=${stock.interval}&apikey=${process.env.REACT_APP_ALPHAVANTAGE_API_KEY}`;
	const res = await fetch(url);
	const data = await res.json();

	const entries = data["Time Series (60min)"];

	// --- Highest Price ---
	let highestArray: Array<{ value: number; date: Date }> = [];
	for (let hour in entries) {
		const highestPrice = entries[hour]["2. high"];
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
		stock,
		bouncebackRate,
		highestValue,
		highestValueDate,
		currentValue,
		currentValueDate,
	};

	return stockData;
}

function calculateStockData<StockData>(data, stock: Stock): StockData {
	const entries = data["Time Series (Daily)"];

	// --- Highest Price ---
	let highestArray: Array<{ value: number; date: Date }> = [];
	for (let day in entries) {
		const highestPrice = entries[day]["2. high"];
		highestArray.push({ value: +highestPrice, date: new Date(day) });
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
		stock,
		bouncebackRate,
		highestValue,
		highestValueDate,
		currentValue,
		currentValueDate,
	};

	return stockData;
}

export async function getDailyStockData<StockData>(stock: Stock) {
	const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock.symbol}&interval=${stock.interval}&apikey=${process.env.REACT_APP_ALPHAVANTAGE_API_KEY}`;
	const res = await fetch(url);
	const stockData = await res
		.json()
		.then((data) => calculateStockData(data, stock));
	return stockData;
}

export async function getWeeklyStockData<StockData>(stock: Stock) {
	const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${stock.symbol}&interval=${stock.interval}&apikey=${process.env.REACT_APP_ALPHAVANTAGE_API_KEY}`;
	const res = await fetch(url);
	const data = await res.json();

	const entries = data["Time Series (Weekly)"];

	// --- Highest Price ---
	let highestArray: Array<{ value: number; date: Date }> = [];
	for (let day in entries) {
		const highestPrice = entries[day]["2. high"];
		highestArray.push({ value: +highestPrice, date: new Date(day) });
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
		stock,
		bouncebackRate,
		highestValue,
		highestValueDate,
		currentValue,
		currentValueDate,
	};

	return data;
}
