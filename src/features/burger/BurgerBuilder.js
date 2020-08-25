import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	ingridiensAmount,
	ingridiensPrice,
	totalPrice,
	calculatePrice,
	orderBurger,
	moreMeat,
	lessMeat,
	moreBacon,
	lessBacon,
	moreChease,
	lessChease,
	moreOnion,
	lessOnion,
	moreCocummber,
	lessCocummber,
	moreSalat,
	lessSalat,
} from './burgerSlice';
import styles from './Burger.module.css';

export function BurgerBuilder() {
	const ingridiens = useSelector(ingridiensAmount);
	const price = useSelector(ingridiensPrice);
	const total = useSelector(totalPrice);

	const dispatch = useDispatch();

	return (
		<>
			{/* MEAT */}
			<div className={styles.row}>
				<button
					className={styles.button}
					aria-label='Less'
					onClick={() => dispatch(moreMeat())}>
					+
				</button>
				<span className={styles.value}>Meat</span>
				<button
					className={styles.button}
					aria-label='More'
					onClick={() => dispatch(lessMeat())}>
					-
				</button>
			</div>
			{/* BEACON */}
			<div className={styles.row}>
				<button
					className={styles.button}
					aria-label='Less'
					onClick={() => dispatch(moreBacon())}>
					+
				</button>
				<span className={styles.value}>Beacon</span>
				<button
					className={styles.button}
					aria-label='More'
					onClick={() => dispatch(lessBacon())}>
					-
				</button>
			</div>
			{/* CHEASE */}
			<div className={styles.row}>
				<button
					className={styles.button}
					aria-label='Less'
					onClick={() => dispatch(moreChease())}>
					+
				</button>
				<span className={styles.value}>Chease</span>
				<button
					className={styles.button}
					aria-label='More'
					onClick={() => dispatch(lessChease())}>
					-
				</button>
			</div>

			{/* ONION */}
			<div className={styles.row}>
				<button
					className={styles.button}
					aria-label='Less'
					onClick={() => dispatch(moreOnion())}>
					+
				</button>
				<span className={styles.value}>Onion</span>
				<button
					className={styles.button}
					aria-label='More'
					onClick={() => dispatch(lessOnion())}>
					-
				</button>
			</div>
			{/* COCUMBER */}
			<div className={styles.row}>
				<button
					className={styles.button}
					aria-label='Less'
					onClick={() => dispatch(moreCocummber())}>
					+
				</button>
				<span className={styles.value}>Cocummber</span>
				<button
					className={styles.button}
					aria-label='More'
					onClick={() => dispatch(lessCocummber())}>
					-
				</button>
			</div>
			{/* SALAT */}
			<div className={styles.row}>
				<button
					className={styles.button}
					aria-label='Less'
					onClick={() => dispatch(moreSalat())}>
					+
				</button>
				<span className={styles.value}>Salat</span>
				<button
					className={styles.button}
					aria-label='More'
					onClick={() => dispatch(lessSalat())}>
					-
				</button>
			</div>
		</>
	);
}
