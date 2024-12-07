import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    selectedItems: 0,
    totalPrice: 0,
    discount: 0,
    discountRate: 0.2,
    grandTotal: 0
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isExits = state.products.find((product) => product._id === action.payload._id);

            if (!isExits) {
                state.products.push({ ...action.payload, quantity: 1 })
            } else {
                console.log("Item already added!");

            }

            state.selectedItems = setSelectedItems(state);
            state.totalPrice = setTotalPrice(state);
            state.discount = setDiscount(state);
            state.grandTotal = setGrandTotal(state);
        },

        updateQuantity: (state, action) => {
            const products = state.products.map((product) => {
                if (product._id === action.payload.id) {
                    if (action.payload.type === 'increment') {
                        product.quantity += 1

                    } else if (action.payload.type === "decrement") {
                        if (product.quantity > 1) {
                            product.quantity -= 1
                        }
                    }

                }
                return product
            })

            state.selectedItems = setSelectedItems(state);
            state.totalPrice = setTotalPrice(state);
            state.discount = setDiscount(state);
            state.grandTotal = setGrandTotal(state);
        },

        clearCart: (state) => {
            state.products = [];
            state.selectedItems = setSelectedItems(state);
            state.totalPrice = setTotalPrice(state);
            state.discount = setDiscount(state);
            state.grandTotal = setGrandTotal(state);
        },

        removeFromCart: (state, action) => {
            state.products = state.products.filter((product) => product._id !== action.payload.id);
            state.selectedItems = setSelectedItems(state);
            state.totalPrice = setTotalPrice(state);
            state.discount = setDiscount(state);
            state.grandTotal = setGrandTotal(state);

        }
    }
});


const setSelectedItems = (state) => state.products.reduce((pre, product) => {
    return Number(pre + product.quantity)
}, 0);

const setTotalPrice = (state) => state.products.reduce((pre, product) => {
    return Number(pre + product.quantity * product.price)
}, 0);

const setDiscount = (state) => setTotalPrice(state) * state.discountRate

const setGrandTotal = (state) => {
    return setTotalPrice(state) - setTotalPrice(state) * state.discountRate
}

export const { addToCart, updateQuantity, clearCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer