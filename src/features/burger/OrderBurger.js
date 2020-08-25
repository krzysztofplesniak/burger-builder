import React from 'react';
import { useDispatch } from 'react-redux';
import { orderBurger } from './burgerSlice';

import styles from './Burger.module.css';

export const OrderBurger = () => {
	const dispatch = useDispatch();

	return (
		<>
			<div className={styles.row}>
				<button
					className={styles.button}
					aria-label='OrderNow'
					//disabled={salat === 0}
					onClick={() => dispatch(orderBurger())}>
					ORDER NOW
				</button>
			</div>
		</>
	);
}
