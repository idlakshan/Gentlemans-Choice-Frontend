import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    selectedItems: 0,
    totalPrice: 0,
    tax: 0,
    taxRate: 0.05,
    grandTotal: 0
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
              const isExits=state.products.find((product)=>product._id===action.payload._id);

              if(!isExits){
                   state.products.push({...action.payload,quantity:1})
              }else{
                console.log("Item already added!");
                
              }

              state.selectedItems=setSelectedItems(state);
              state.totalPrice=setTotalPrice(state);
              state.tax=setTax(state);
              state.grandTotal=setGrandTotal(state);
        }
    }
});


const setSelectedItems=(state)=>state.products.reduce((pre,product)=>{
    return Number(pre+product.quantity)
});

const setTotalPrice=(state)=>state.products.reduce((pre,product)=>{
    return Number(pre+product.quantity * product.price)
});

const setTax=(state)=>setTotalPrice(state)*state.taxRate

const setGrandTotal=(state)=>{
    return setTotalPrice(state) + setTotalPrice(state)*state.taxRate
}

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer