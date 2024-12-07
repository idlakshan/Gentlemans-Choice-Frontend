import React from 'react';
import { useSelector } from 'react-redux';

const PlaceOrder = () => {
  const { subTotal,  grandTotal, delivery, products } = useSelector(
    (store) => store.cart
  );

  return (
    <div className='section__container'>
      <form className="bg-white shadow-md rounded-lg p-6 max-w-6xl mx-auto mt-1">

        <div className="cart__container flex overflow-x-auto p-4 bg-gray-50 border rounded-lg mb-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="cart__item flex flex-col items-center px-4 py-2 border rounded-lg m-2"
              >
                <img
                  src={product.image || 'https://via.placeholder.com/50'}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded mb-2"
                />
                <p className="font-semibold text-sm text-center">{product.name}</p>
                <p className="text-sm mt-1">Qty: {product.quantity}</p>
                <p className="text-sm font-semibold mt-1">Rs {product.price.toFixed(2)}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty</p>
          )}
        </div>

    
        <div className="lg:flex lg:space-x-6">
          <div className="flex-1 space-y-4 bg-gray-50 border p-4 rounded-lg">
            <p className="text-xl font-semibold mb-4">Delivery Information</p>
            <div className="flex space-x-2">
              <input
                required
                name="firstName"
                type="text"
                className="border px-3 py-2 rounded-lg w-1/2 focus:outline-none"
                placeholder="First name"
              />
              <input
                required
                name="lastName"
                type="text"
                className="border px-3 py-2 rounded-lg w-1/2 focus:outline-none"
                placeholder="Last name"
              />
            </div>
            <input
              required
              name="email"
              type="email"
              className="border px-3 py-2 rounded-lg w-full focus:outline-none"
              placeholder="Email address"
            />
            <input
              required
              name="street"
              type="text"
              className="border px-3 py-2 rounded-lg w-full focus:outline-none"
              placeholder="Street"
            />
            <div className="flex space-x-2">
              <input
                required
                name="city"
                type="text"
                className="border px-3 py-2 rounded-lg w-1/2 focus:outline-none"
                placeholder="City"
              />
              <input
                required
                name="state"
                type="text"
                className="border px-3 py-2 rounded-lg w-1/2 focus:outline-none"
                placeholder="State"
              />
            </div>
            <div className="flex space-x-2">
              <input
                required
                name="zipCode"
                type="text"
                className="border px-3 py-2 rounded-lg w-1/2 focus:outline-none"
                placeholder="Zip code"
              />
              <input
                required
                name="country"
                type="text"
                className="border px-3 py-2 rounded-lg w-1/2 focus:outline-none"
                placeholder="Country"
              />
            </div>
            <input
              required
              name="phone"
              type="text"
              className="border px-3 py-2 rounded-lg w-full focus:outline-none"
              placeholder="Phone"
            />
          </div>

       
          <div className="bg-gray-50 border p-4 rounded-lg flex-1 mt-6 lg:mt-0">
            <h2 className="text-lg font-semibold mb-3">Cart Totals</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>Rs {subTotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Delivery Fee</p>
                <p>Rs {delivery.toFixed(2)}</p>
              </div>
              <hr />
              <div className="flex justify-between font-semibold mt-2">
                <p>Grand Total</p>
                <p>Rs {grandTotal.toFixed(2)}</p>
              </div>
            </div>
            <button
              type="submit"
              className="bg-red-500 px-3 py-1.5 text-white mt-2 rounded-md flex justify-between items-center mb-4"
            >
              Proceed To Payment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
