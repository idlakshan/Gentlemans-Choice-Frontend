import React, { useEffect, useState } from 'react'
import productsData from '../../data/products.json'
import ShopFiltering from './ShopFiltering'
import ProductCards from '../shop/ProductCards'
import { useFetchAllProductsQuery } from '../../redux/features/product/productApi'

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

   // const [products, setProducts] = useState(productsData);
    const [filterState, setFilterState] = useState({
        category: 'all',
        color: 'all',
        priceRange: ''
    });

    const [currentPage,setCurrentPage]=useState(1);
    const [productPerPage,setProductPerPage]=useState(8);

    const{category,color,priceRange}=filterState;
    //console.log(filterState);
    
    const { min: minPrice, max: maxPrice } = priceRange || { min: 0, max: 0 };
   
    

    const {data:{products=[],totalPages,totalProducts}={},error,isLoading}=useFetchAllProductsQuery({
        category:category!=='all'?category:'',
        color:color!=='all'?color:color,
        minPrice:isNaN(minPrice)?'':minPrice,
        maxPrice:isNaN(maxPrice)?'':maxPrice,
        page:currentPage,
        limit:productPerPage
    })



    // const applyFilter = () => {
    //     let filteredProducts = productsData;

    //     if (filterState.category && filterState.category !== 'all') {
    //         filteredProducts = filteredProducts.filter((product) => product.category === filterState.category)
    //     }

    //     if (filterState.color && filterState.color !== 'all') {
    //         filteredProducts = filteredProducts.filter((product) => product.color === filterState.color);
    //     }

    //     if (filterState.priceRange) {
    //         console.log(filterState.priceRange);
            
    //         const { min, max } = filterState.priceRange;
    //         filteredProducts = filteredProducts.filter((product) => product.price >= min && product.price <= max)
    //     }

    //     setProducts(filteredProducts);
    // }

    const clearFilters = () => {
        setFilterState({
            category: 'all',
            color: 'all',
            priceRange: ''
        });
    }

    // useEffect(() => {
    //     applyFilter();
    // }, [filterState])

    if(isLoading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error loading products...</div>
    }

    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>Shop Page</h2>
                <p className='section__subheader'>Discover the Hottest Picks: Elevate your style with our curated collection of trending men's choice products
                </p>
            </section>

            <section className='section__container'>
                <div className='flex flex-col md:flex-row md:gap-0 gap-8'>
                    <div className='flex justify-center w-full md:w-1/4 md:justify-start'>
                        <ShopFiltering
                            filterState={filterState}
                            filters={filters}
                            setFilterState={setFilterState}
                            clearFilters={clearFilters}
                        />
                    </div>
                    <div className='w-full md:w-3/4'>
                        <h3 className='text-xl font-medium mb-4'>Products Available {products.length}</h3>
                        <ProductCards products={products} />
                    </div>
                </div>
            </section>


        </>
    )
}

export default ShopPage