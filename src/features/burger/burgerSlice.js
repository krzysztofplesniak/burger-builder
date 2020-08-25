import { createSlice } from '@reduxjs/toolkit';

export const burgerSlice = createSlice({
	name: 'burger',
	initialState: {
		ingredientsAmount: {
			meat: 0,
			beacon: 0,
			chease: 0,
			salat: 0,
			cocummber: 0,
			onion: 0,
		},
		ingridiensPrice: {
			meat: 1,
			beacon: 0.75,
			chease: 0.5,
			salat: 0.25,
			cocummber: 0.25,
			onion: 0.1,
		},
		totalPrice: 0,
		loading: false,
		error: [],
	},
	reducers: {
		moreMeat: state => {
			state.ingredientsAmount.meat += 1;
		},
		lessMeat: state => {
			state.ingredientsAmount.meat -= 1;
		},

		moreBacon: state => {
			state.ingredientsAmount.beacon += 1;
		},
		lessBacon: state => {
			state.ingredientsAmount.beacon -= 1;
		},

		moreChease: state => {
			state.ingredientsAmount.chease += 1;
		},
		lessChease: state => {
			state.ingredientsAmount.chease -= 1;
		},

		moreSalat: state => {
			state.ingredientsAmount.salat += 1;
		},
		lessSalat: state => {
			state.ingredientsAmount.salat -= 1;
		},

		moreCocummber: state => {
			state.ingredientsAmount.cocummber += 1;
		},
		lessCocummber: state => {
			state.ingredientsAmount.cocummber -= 1;
		},

		moreOnion: state => {
			state.ingredientsAmount.onion += 1;
		},
		lessOnion: state => {
			state.ingredientsAmount.onion -= 1;
		},

		calculatePrice: state => {},
		orderBurger: state => {},
	},
});

export const {
	calculatePrice,
	orderBurger,
	moreOnion,
	lessOnion,
	moreCocummber,
	lessCocummber,
	moreBacon,
	lessBacon,
	moreMeat,
	lessMeat,
	moreChease,
	lessChease,
	moreSalat,
	lessSalat,
} = burgerSlice.actions;

export const ingridiensAmount = state => state.burger.ingredientsAmount;
export const ingridiensPrice = state => state.burger.ingridiensPrice;
export const totalPrice = state => state.burger.totalPrice;
export const loading = state => state.burger.loading;
export const error = state => state.burger.error;

export default burgerSlice.reducer;
