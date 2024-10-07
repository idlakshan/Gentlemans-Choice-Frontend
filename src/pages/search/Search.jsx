import React, { useState } from 'react'
import products from '../../data/products.json'
import ProductCards from '../shop/ProductCards';

const Search = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearch = () => {
        //console.log("hii");
        const query=searchQuery.toLowerCase();

        const filtered = products.filter((product) => {
           return product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query);
        });
        setFilteredProducts(filtered);
    }


    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>Search Products</h2>
                <p className='section__subheader'>Browse a diverse range of categories, from chic dressess to versatile accessories.
                    Elevate your style today!
                </p>
            </section>

            <section className='section__container'>
                <div className='w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-4'>
                    <input type="text"
                        placeholder='Search for products...'
                        className='w-full max-w-4xl p-2 border rounded'
                        value={searchQuery}
                        onChange={(e)=>setSearchQuery(e.target.value)}
                    />

                    <button
                        className='search-button w-full md:w-auto py-2 px-8 bg-primary text-white rounded'
                        onClick={handleSearch}
                    >Search</button>
                </div>

                <ProductCards products={filteredProducts} />

            </section>

        </>
    )
}

export default Search