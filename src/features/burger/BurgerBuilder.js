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
	const { meat, beacon, chease, onion, cocummber, salat } = useSelector(ingridiensAmount);
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

				<button
					className={styles.button}
					aria-label='More'
					onClick={() => dispatch(lessMeat())}>
					-
				</button>
				<span className={styles.value}>Meat {meat}</span>
			</div>
			{/* BEACON */}
			<div className={styles.row}>
				<button
					className={styles.button}
					aria-label='Less'
					onClick={() => dispatch(moreBacon())}>
					+
				</button>

				<button
					className={styles.button}
					aria-label='More'
					onClick={() => dispatch(lessBacon())}>
					-
				</button>
    <span className={styles.value}>Beacon {beacon}</span>
			</div>
			{/* CHEASE */}
			<div className={styles.row}>
				<button
					className={styles.button}
					aria-label='Less'
					onClick={() => dispatch(moreChease())}>
					+
				</button>

				<button
					className={styles.button}
					aria-label='More'
					onClick={() => dispatch(lessChease())}>
					-
				</button>
    <span className={styles.value}>Chease {chease}</span>
			</div>

			{/* ONION */}
			<div className={styles.row}>
				<button
					className={styles.button}
					aria-label='Less'
					onClick={() => dispatch(moreOnion())}>
					+
				</button>

				<button
					className={styles.button}
					aria-label='More'
					onClick={() => dispatch(lessOnion())}>
					-
				</button>
    <span className={styles.value}>Onion {onion}</span>
			</div>
			{/* COCUMBER */}
			<div className={styles.row}>
				<button
					className={styles.button}
					aria-label='Less'
					onClick={() => dispatch(moreCocummber())}>
					+
				</button>
				<button
					className={styles.button}
					aria-label='More'
					onClick={() => dispatch(lessCocummber())}>
					-
				</button>
    <span className={styles.value}>Cocummber {cocummber}</span>
			</div>
			{/* SALAT */}
			<div className={styles.row}>
				<button
					className={styles.button}
					aria-label='Less'
					onClick={() => dispatch(moreSalat())}>
					+
				</button>

				<button
					className={styles.button}
					aria-label='More'
					onClick={() => dispatch(lessSalat())}>
					-
				</button>
    <span className={styles.value}>Salat {salat}</span>
			</div>
		</>
	);
}
