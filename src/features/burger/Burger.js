import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { totalPrice } from './burgerSlice';
import { BurgerBuilder } from './BurgerBuilder';
import { OrderBurger } from './OrderBurger';

import styles from './Burger.module.css';

export function Burger() {
	const price = useSelector(totalPrice);

	//const dispatch = useDispatch();

	return (
		<>
			<div className={styles.row}>
				<span className={styles.value}>TOTAL PRICE {price}</span>
			</div>
            <OrderBurger />
			<BurgerBuilder />
		</>
	);
}
