import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import burgerReducer from '../features/burger/burgerSlice';


export default configureStore({
  reducer: {
    counter: counterReducer,
    burger: burgerReducer
  },
});
