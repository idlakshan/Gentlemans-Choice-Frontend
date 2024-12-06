import React from 'react'
import { Link } from 'react-router-dom'
import RatingStars from '../../components/RatingStars'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'


const ProductCards = ({ products }) => {
  //console.log(products)
  const dispatch=useDispatch();

  const handleAddToCart=(product)=>{
    dispatch(addToCart(product))
  }

  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {products.map((product, index) => (
    <div
      key={index}
      className="product__card border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white"
    >
      <div className="relative group">
        <Link to={`/shop/${product._id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(product);
            }}
            className="p-2 bg-primary text-white rounded-full shadow-md hover:bg-primary-dark"
          >
            <i className="ri-shopping-cart-2-line"></i>
          </button>
        </div>
      </div>

      <div className="product__card__content p-4">
        <h4 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h4>
        <div className="flex items-center justify-between mt-2">
          <p className="text-primary font-medium">
            Rs {product.price}{" "}
            {product.oldPrice && (
              <span className="text-gray-500 line-through ml-2">
                {product.oldPrice}
              </span>
            )}
          </p>
        </div>
        <div className="mt-2">
          <RatingStars rating={product.rating} />
        </div>
      </div>
    </div>
  ))}
</div>


  )
}

export default ProductCards