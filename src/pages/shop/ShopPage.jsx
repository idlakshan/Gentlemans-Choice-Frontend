import React, { useEffect, useState } from 'react'
import productsData from '../../data/products.json'
import ShopFiltering from './ShopFiltering'
import ProductCards from '../shop/ProductCards'

const filters = {
    categories: ['all', 'accessories', 'dress', 'footwares', 'perfumes'],
    colors: ['all', 'black', 'gold', 'blue', 'green', 'brown'],
    priceRange: [
        { label: "Under 2000", min: 0, max: 2000 },
        { label: "2000 - 5000", min: 2000, max: 5000 },
        { label: "5000 - 10000", min: 5000, max: 10000 },
        { label: "10000 and above", min: 10000, max: Infinity }
    ]
}

const ShopPage = () => {

    const [products, setProducts] = useState(productsData);
    const [filterState, setFilterState] = useState({
        category: 'all',
        color: 'all',
        priceRange: ''
    });



    const applyFilter = () => {
        let filteredProducts = productsData;

        if (filterState.category && filterState.category !== 'all') {
            filteredProducts = filteredProducts.filter((product) => product.category === filterState.category)
        }

        if (filterState.color && filterState.color !== 'all') {
            filteredProducts = filteredProducts.filter((product) => product.color === filterState.color);
        }

        if(filterState.priceRange){
            const {min,max}=filterState.priceRange;
            filteredProducts=filteredProducts.filter((product)=>product.price >= min && product.price <= max)
        }

        setProducts(filteredProducts);
    }

    const clearFilters = () => {
        setFilterState({
            category: 'all',
            color: 'all',
            priceRange: ''
        });
    }

    useEffect(() => {
        applyFilter();
    }, [filterState])


    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>Shop Page</h2>
                <p className='section__subheader'>Discover the Hottest Picks: Elevate your style with our curated collection of trending men's choice products
                </p>
            </section>

            <section className='section__container'>
                <div className='flex flex-col md:flex-row md:gap-14 gap-8'>
                    <div className='w-1/4'>
                        <ShopFiltering filterState={filterState} filters={filters} setFilterState={setFilterState} clearFilters={clearFilters}/>
                    </div>
                    <div>
                        <h3 className='text-xl font-medium mb-4'>Products Available {products.length}</h3>
                        <ProductCards products={products} />
                    </div>
                </div>

            </section>
        </>
    )
}

export default ShopPage