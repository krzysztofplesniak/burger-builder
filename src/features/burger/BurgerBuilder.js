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
	lessdBacon,
	moreOnion,
	lessdOnion,
	moreCocummber,
	lessCocummber,
	moreCheasem,
	lessChease,
	moreSalat,
	lessSalat,
} from './burgerSlice';
import styles from './Burger.module.css';

export function BurgerBuilder() {
  const ingridiens = useSelector(ingridiensAmount);
  const price = useSelector(ingridiensPrice);
  const total =  useSelector(totalPrice);

  const dispatch = useDispatch();
  
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Less"
          onClick={() => dispatch(moreMeat())}
        >
          +
        </button>
        <span className={styles.value}>Burger amount</span>
        <button
          className={styles.button}
          aria-label="More"
          onClick={() => dispatch(lessMeat())}
        >
          -
        </button>
      </div>
      {/* <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div> */}
    </div>
  );
}
