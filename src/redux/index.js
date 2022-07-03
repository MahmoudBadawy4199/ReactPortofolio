import { configureStore } from '@reduxjs/toolkit';
import { shopSlice } from './features/shopSlice';
import { todoSlice } from './features/todoSlice';


const rootReducer = {
    todos: todoSlice.reducer,
    shop: shopSlice.reducer
}
// STORE
export const store = configureStore({
    reducer : rootReducer
});