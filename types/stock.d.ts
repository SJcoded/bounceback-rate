export type Stock = {
	symbol: string;
	interval: "5min" | "15min" | "30min" | "60min" | string;
};

export type StockData = {
	bouncebackRate: number;
	highestValue: number;
	highestValueDate: Date | undefined;
	currentValue: number;
	currentValueDate: Date | undefined;
};
