import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../redux/features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

const OrderSummary = ({handleCartToggle}) => {
    //const products=useSelector((store)=>store.cart.products);
    const {discount,discountRate,totalPrice,subTotal,selectedItems}=useSelector((store)=>store.cart);
    const dispatch=useDispatch();

    const navigate=useNavigate()

    const handleNavigate=()=>{
        handleCartToggle(),
        navigate("/shop/place-order")
    }


  return (
    <div className='bg-primary-light mt-5 rounded text-base'>
        <div className='px-6 py-4 space-y-5'>
            <h2 className='text-xl text-text-dark'>Order Summary</h2>
            <p className='text-text-dark mt-2'>Selected Items : {selectedItems}</p>
            <p>Total Price : Rs {totalPrice.toFixed(2)}</p>
            <p>Discount ({discountRate * 100}%) : Rs {discount.toFixed(2)}</p>
            <h3 className='font-bold'>Sub Total : Rs {subTotal.toFixed(2)}</h3>

            <div className='px-4 mb-6'>
                <button onClick={()=>{dispatch(clearCart())}} className='bg-red-500 px-3 py-1.5 text-white mt-2 rounded-md flex justify-between items-center mb-4'><span className='mr-2'>Clear cart</span>
                    <i className='ri-delete-bin-7-line'></i>
                </button>
                <button onClick={handleNavigate} className='bg-green-600 px-3 py-1.5 text-white mt-2 rounded-md flex justify-between items-center mb-4'><span className='mr-2'>Proceed Checkout</span>
                    <i className='ri-bank-card-line'></i>
                </button>
            </div>
        </div>

    </div>
  )
}

export default OrderSummary