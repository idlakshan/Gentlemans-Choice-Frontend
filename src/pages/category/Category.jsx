import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../../data/products.json'
import ProductCards from '../shop/ProductCards';

const Category = () => {
    const { categoryName } = useParams();
   // console.log(categoryName);

   const[filteredProducts,setFilteredProducts]=useState([]);


   useEffect(()=>{
    const filtered=products.filter((product)=>product.category === categoryName.toLocaleLowerCase());
    setFilteredProducts(filtered);
    window.scrollTo(0,0)
   },[categoryName]);
    
  return (
   <>
    <section className='section__container bg-primary-light'>
        <h2 className='section__header capitalize'>{categoryName}</h2>
        <p className='section__subheader'>Browse a diverse range of categories, from chic dressess to versatile accessories.
            Elevate your style today!
        </p>
    </section>

    <div className='section__container'>
        <ProductCards products={filteredProducts}/>
    </div>
   </>
  )
}

export default Category 