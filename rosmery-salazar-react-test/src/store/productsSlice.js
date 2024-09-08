import { createSlice } from '@reduxjs/toolkit';
export const productsSlice = createSlice({
  name: 'productsSlice',
    initialState: {           
        products:{},
        users:{}
    },
    reducers: {
        onGettingProducts: ( state, { payload } ) => {            
            state.products=payload;           
            localStorage.setItem('products', JSON.stringify(payload));       
        },   
        onGettingUsers: ( state, { payload } ) => {
            
            state.users=payload;           
            localStorage.setItem('users', JSON.stringify(payload));       
        },   
        
      
    }
});


export const {  onGettingProducts, onGettingUsers } = productsSlice.actions;