// import { ChartData } from "chart.js";
import { useEffect, useState } from "react";
import styles from "../styles/components/Chart.module.scss";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	LineOptions,
	ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { _DeepPartialObject } from "chart.js/types/utils";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);

type Props = {
	dataPoints: number[];
};

const lineOptions: any = {
	tension: 0.2,
	borderColor: "#DA5867",
	borderCapStyle: "round",
	borderDashOffset: 0.0,
	borderJoinStyle: "round",
	borderWidth: 1,
	capBezierPoints: true,
	cubicInterpolationMode: "default",
	borderDash: [],
	stepped: false,
	spanGaps: 1,
	segment: {
		backgroundColor: undefined,
		borderColor: undefined,
		borderCapStyle: undefined,
		borderDash: undefined,
		borderDashOffset: undefined,
		borderJoinStyle: undefined,
		borderWidth: undefined,
	},
	scales: {
		yAxes: [
			{
				ticks: {
					beginAtZero: true,
					max: 1.5,
					min: 0,
				},
			},
		],
	},
	elements: {
		point: {
			radius: 0,
		},
	},
};

const percentages = [100, 200, 500, 1000];

function Chart({ dataPoints }: Props) {
	useEffect(() => {
		console.log(dataPoints);
	}, []);

	const data = {
		labels: ["0", "-25%", "-50%", "-75%", "-100%"],
		datasets: [
			{
				label: "Gain",
				data: percentages,
			},
		],
	};

	return (
		<div className={styles.container}>
			<Line
				data={data}
				options={{
					tension: 0.3,
					borderColor: "#DA5867",
					borderCapStyle: "round",
					borderDashOffset: 0.0,
					borderJoinStyle: "round",
					borderWidth: 1,
					capBezierPoints: true,
					cubicInterpolationMode: "default",
					borderDash: [],
					stepped: false,
					spanGaps: 1,
					segment: {
						backgroundColor: undefined,
						borderColor: undefined,
						borderCapStyle: undefined,
						borderDash: undefined,
						borderDashOffset: undefined,
						borderJoinStyle: undefined,
						borderWidth: undefined,
					},
					maintainAspectRatio: false,
					scales: {
						yAxes: {
							position: "right",
							grid: {
								display: false,
							},
							ticks: {
								display: true,
								source: "labels",
								stepSize: 0.1,
								maxTicksLimit: 5,
							},
						},
						xAxes: {
							grid: {
								display: false,
							},
							ticks: {},
						},
					},
					line: lineOptions,
				}}
			/>
		</div>
	);
}

export default Chart;
