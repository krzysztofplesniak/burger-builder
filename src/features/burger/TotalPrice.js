import React from 'react';
import { useSelector } from 'react-redux';
import { totalPrice } from './burgerSlice';

import styles from './Burger.module.css';

export const TotalPrice = () => {

	const price = useSelector(totalPrice);

	return (
		<>
			<div className={styles.row}>
				<span className={styles.value}>TOTAL PRICE {price}</span>
			</div>
		</>
	);
};
