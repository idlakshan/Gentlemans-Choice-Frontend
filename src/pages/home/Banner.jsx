import React from 'react'
import { Link } from 'react-router-dom'
import BannerImg from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className='section__container header__container'>
        <div className='header__content'>
            <h4>UP TO 20% DISCOUNT ON</h4>
            <h1>Gent's Choice</h1>
            <p>Discover the latest trends and express your unique style with our Gentleman's Choice website. Explore a curated collection
             of clothing, accessories, and footwear that caters to every taste and occasion.   
            </p>
            <button className='btn'><Link to="/shop">EXPLORE MORE</Link></button>
        </div>

        <div className='header__img header__image'>
            <img className='banner__img' src={BannerImg} alt="Banner Image" />
        </div>
    </div>
  )
}

export default Banner