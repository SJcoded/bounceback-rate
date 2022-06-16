import styles from "../styles/components/ActiveStock.module.scss";
import Image from "next/image";

type Props = {
	stockName: string;
	exchange: string;
	stockSymbol: string;
	stockLogo: string;
};

function ActiveStock({ stockLogo, exchange, stockName, stockSymbol }: Props) {
	const logoPath: string = `../public/icons/${stockSymbol}.svg`;

	return (
		<div className={styles.activeStock}>
			<div className={styles.activeStockIconContainer}>
				<Image
					src={require("../public/icons/GOOG.svg")}
					alt={stockName + " logo"}
				/>
			</div>
			<div className={styles.activeStockTextContainer}>
				<p>
					{exchange}: {stockSymbol}
				</p>
				<h1>{stockName}</h1>
			</div>
		</div>
	);
}

export default ActiveStock;
