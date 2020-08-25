import React from 'react';
import { BurgerBuilder } from './BurgerBuilder';
import { OrderBurger } from './OrderBurger';
import { TotalPrice } from './TotalPrice';

const Burger = () => {
	
	return (
		<>
			<TotalPrice />
            <OrderBurger />
			<BurgerBuilder />
		</>
	);
}

export default Burger;
