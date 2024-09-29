import React, { useState } from 'react'
import ProductCards from './ProductCards'
import products from '../../data/products.json'

const TrendingProducts = () => {

    const [visibleCount,setVisibleCount]=useState(8);

    const loadMoreProducts=()=>{
        setVisibleCount(pre=>pre+4);
    }

    return (
        <section className='section__container product__container'>
            <h2 className='section__header'>Trending Products</h2>
            <p className='section__subheader mb-12'>Discover the Hottest Pickes: Elevate Your Style with Our Curated Collection of Trending Gentleman's Choice Products.</p>

            {/* product cards */}
            <div className='mt-12'>
                <ProductCards products={products.slice(0,visibleCount)} />
            </div>

            {/* Load more button */}

            <div className='product__btn'>
                {
                    visibleCount< products.length && (
                        <button className='btn' onClick={loadMoreProducts}>Load More</button>
                    )
                }
              
            </div>

        </section>
    )
}

export default TrendingProducts