import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='fixed-nav-bar w-nav'>
      <nav>
        {/* navbar links */}
        <ul className='nav__links'>
          <li className='link'><Link to="/">Home</Link></li>
          <li className='link'><Link to="/shop">Shop</Link></li>
          <li className='link'><Link to="/">Pages</Link></li>
          <li className='link'><Link to="/contact">Contact</Link></li>
        </ul>

        {/* navbar logo */}
        <div className='nav__logo'>
          <Link to="/">Gentleman's Choice<span>.</span></Link>
        </div>

        {/* navbar Icons */}
        <div className='nav__icons relative'>
          <span><Link to="/search"><i className="ri-search-line"></i></Link></span>
          <span>
            <button className='hover:text-primary'>
              <i className="ri-shopping-bag-line"></i>
              <sup className='text-sm bg-primary rounded-full px-1.5 text-white text-center inline-block'>0</sup>
            </button>
          </span>
          <span><Link to="/login"><i className="ri-user-line"></i></Link></span>
        </div>

      </nav>



    </header>
  )
}

export default Navbar