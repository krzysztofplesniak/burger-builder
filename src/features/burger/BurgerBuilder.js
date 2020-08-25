import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ingridiensAmount, totalPrice } from './burgerSlice';
import { calculatePrice } from './burgerSlice';
import {
	moreMeat,
	lessMeat,
	moreBacon,
	lessBacon,
	moreChease,
	lessChease,
	moreOnion,
	lessOnion,
	moreCocumber,
	lessCocumber,
	moreSalat,
	lessSalat,
} from './burgerSlice';
import styles from './Burger.module.css';

export function BurgerBuilder() {
	useEffect(() => {
		console.log('calculatePrice');
        dispatch(calculatePrice());
        // eslint-disable-next-line 
	},);

	const { meat, beacon, chease, onion, cocumber, salat } = useSelector(
		ingridiensAmount
	);

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
					disabled={meat === 0}
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
					disabled={beacon === 0}
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
					disabled={chease === 0}
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
					disabled={onion === 0}
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
					onClick={() => dispatch(moreCocumber())}>
					+
				</button>
				<button
					className={styles.button}
					aria-label='More'
					disabled={cocumber === 0}
					onClick={() => dispatch(lessCocumber())}>
					-
				</button>
				<span className={styles.value}>Cocumber {cocumber}</span>
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
					disabled={salat === 0}
					onClick={() => dispatch(lessSalat())}>
					-
				</button>
				<span className={styles.value}>Salat {salat}</span>
			</div>
		</>
	);
}
