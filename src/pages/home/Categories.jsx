import React from 'react'
import clothes from '../../assets/cateClothes.jpg'
import accessories from '../../assets/categoryAccessories.jpg'
import footwares from '../../assets/categotyFootware.jpg'
import perfumes from '../../assets/catePerfume.jpg'
import { Link } from 'react-router-dom'



const Categories = () => {
    const categories = [
        { name: "Accessories", path: "accessories", image: accessories },
        { name: "Dress Collection", path: "dress", image: clothes },
        { name: "Footware", path: "footware", image: footwares },
        { name: "Perfumes", path: "perfumes", image: perfumes },
    ]

    return (
        <div className='product__grid'>
            {
                categories.map((category) => {
                    return <Link to={`categories/${category.path}`} className='categories__card'>
                        <img src={category.image} alt={category.name} className='category__img'/>
                        <h4>{category.name}</h4>
                    </Link>
                })
            }
        </div>
    )
}

export default Categories