import { configureStore } from '@reduxjs/toolkit';
import burgerReducer from '../features/burger/burgerSlice';


export default configureStore({
  reducer: {
     burger: burgerReducer
  },
});
