import React from 'react'
import { Link, useParams } from 'react-router-dom'
import RatingStars from '../../../components/RatingStars';
import { useFetchProductByIdQuery } from '../../../redux/features/product/productApi';
import { data } from 'autoprefixer';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/features/cart/cartSlice';
import ReviewsCard from '../Reviews/ReviewsCard';

const SingleProduct = () => {
    const { id } = useParams();
    // console.log(id);

    const { data: productData, error, isLoading } = useFetchProductByIdQuery(id);
    const dispatch = useDispatch();

     //console.log(productData);

    const singleProduct = productData?.product || {};
    const productReviews = productData?.reviews || [];

       //console.log(singleProduct, productReviews);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error loading product details...</p>
    }



    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>Single Product Page</h2>
                <div className='section__subheader space-x-2'>
                    <span className='hover:text-primary'><Link to="/">home</Link></span>
                    <i className='ri-arrow-right-s-line'></i>
                    <span className='hover:text-primary'><Link to="/shop">shop</Link></span>
                    <i className='ri-arrow-right-s-line'></i>
                    <span className='hover:text-primary'>{singleProduct?.name}</span>
                </div>
            </section>

            <section className='section__container mt-8'>
                <div className='flex flex-col items-center md:flex-row gap-8'>
                    <div className='md:w-1/2 w-full'>
                        <img className='rounded-md w-full h-auto' src={singleProduct?.image} alt="" />

                    </div>

                    <div className='md:w-1/2 w-full'>
                        <h3 className='text-2xl font-semibold mb-4'>{singleProduct?.name}</h3>
                        <p className='text-xl text-primary mb-4'>Rs {singleProduct?.price}
                            {singleProduct?.oldPrice && <s className='ml-2'>Rs {singleProduct?.oldPrice}</s>}
                        </p>
                        <p className='text-gray-700 mb-8'>{singleProduct?.description}</p>

                        <div className='flex flex-col space-y-2'>
                            <p><strong>Category:</strong> {singleProduct?.category}</p>
                            <p><strong>Color:</strong> {singleProduct?.color}</p>
                            <div className='flex gap-1 items-center'>
                                <strong>Raiting: </strong>
                                <RatingStars rating={singleProduct?.rating} />
                            </div>

                        </div>
                        <button className='mt-6 px-6 py-3 bg-primary text-white rounded-md' onClick={(e) => {
                            e.stopPropagation()
                            handleAddToCart(singleProduct)
                        }}>Add to Cart</button>
                    </div>

                </div>

            </section>

            <section className='section__container mt-8'>
               <ReviewsCard productReviews={productReviews}/>

            </section>
        </>
    )
}

export default SingleProduct