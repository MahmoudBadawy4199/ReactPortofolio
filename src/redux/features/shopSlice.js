import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const baseURL = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk('shop/fetchProducts',() => {
        return fetch(baseURL)
            .then((res) => res.json())
            .then((json) => json)
            .catch(err => console.log(err))
    });



const initialState = {
    products: [],
    loading: false,
    err: {}
}


export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        addProduct: () => {
            console.log('product');
        }
    },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.loading = true;
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.products = action.payload
            state.loading = false
        },
        [fetchProducts.rejected]: (state,action) => {
            state.err = action.payload
            state.loading = false
        }
        

    }

})



export const { addProduct}  = shopSlice.actions;
