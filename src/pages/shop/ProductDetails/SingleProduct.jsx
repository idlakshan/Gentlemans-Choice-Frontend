import React from 'react'
import { Link, useParams } from 'react-router-dom'
import RatingStars from '../../../components/RatingStars';

const SingleProduct = () => {
    const { id } = useParams();
    // console.log(id);

    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>Single Product Page</h2>
                <div className='section__subheader space-x-2'>
                    <span className='hover:text-primary'><Link to="/">home</Link></span>
                    <i className='ri-arrow-right-s-line'></i>
                    <span className='hover:text-primary'><Link to="/shop">shop</Link></span>
                    <i className='ri-arrow-right-s-line'></i>
                    <span className='hover:text-primary'>Product name</span>
                </div>
            </section>

            <section className='section__container mt-8'>
                <div className='flex flex-col items-center md:flex-row gap-8'>
                    <div className='md:w-1/2 w-full'>
                        <img className='rounded-md w-full h-auto' src="https://www.dollarwesternwear.com/cdn/shop/products/troubador-white_720x.jpg?v=1632248235" alt="" />

                    </div>

                    <div className='md:w-1/2 w-full'>
                          <h3 className='text-2xl font-semibold mb-4'>Product Name</h3>
                          <p className='text-xl text-primary mb-4'>rs 1000 <s>rs 1300</s></p>
                          <p className='text-gray-700 mb-8'>decscription</p>

                          <div>
                            <p><strong>Category:</strong> accessories</p>
                            <p><strong>Color:</strong> black</p>
                            <div className='flex gap-1 items-center'>
                                <strong>Raiting: </strong>
                                <RatingStars rating={4}/>
                            </div>
                           
                          </div>
                          <button className='mt-6 px-6 py-3 bg-primary text-white rounded-md'>Add to Cart</button>
                    </div>

                </div>

            </section>

            <section className='section__container mt-8'>
                Reviews

            </section>
        </>
    )
}

export default SingleProduct