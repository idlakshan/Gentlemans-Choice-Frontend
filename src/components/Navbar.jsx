import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import CartModal from '../pages/shop/CartModal'

import avatarImage from '../assets/avatar.png'
import { useLogoutUserMutation } from '../redux/features/auth/authApi'
import { logout } from '../redux/features/auth/authSlice'

const Navbar = () => {
  const products = useSelector((state) => state.cart.products)
  //console.log(products);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  }

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [logoutUser]=useLogoutUserMutation();
  const navigate=useNavigate();
  //  console.log(user);

  const [isDropDownToggle,setIsDropDownToggle]=useState(false);
  const handleDropDownOpen=()=>{
    setIsDropDownToggle(!isDropDownToggle)
  }

  const adminDropDownMenus=[
    {lable:"Dashboard", path:"/dashboard/admin"},
    {lable:"Manage Items", path:"/dashboard/manage-products"},
    {lable:"All Orders", path:"/dashboard/manage-orders"},
    {lable:"Add New Post", path:"/dashboard/add-new-product"}
  ]


  const userDropDownMenus=[
    {lable:"Dashboard", path:"/dashboard"},
    {lable:"Profile", path:"/dashboard/profile"},
    {lable:"Payments", path:"/dashboard/payments"},
    {lable:"Orders", path:"/dashboard/orders"}
  ]

  const dropdownMenus=user?.role === 'admin' ?[...adminDropDownMenus]:[...userDropDownMenus]

  const handleLogout=async()=>{
        try {
          await logoutUser().unwrap();
          dispatch(logout())
          navigate("/")
        } catch (error) {
          console.log("Failed to logout ",error);
          
        }
  }

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
          <Link className='fullname' to="/">Gentleman's Choice<span>.</span></Link>
          <Link className='shortname' to="/">Gent's Choice<span>.</span></Link>
        </div>

        {/* navbar Icons */}
        <div className='nav__icons relative'>
          <span><Link to="/search"><i className="ri-search-line"></i></Link></span>
          <span>
            <button onClick={handleCartToggle} className='hover:text-primary'>
              <i className="ri-shopping-bag-line"></i>
              <sup className='text-sm bg-primary rounded-full px-1.5 text-white text-center inline-block'>{products.length}</sup>
            </button>
          </span>
          <span>
            {user ? <><img onClick={handleDropDownOpen} className='size-6 rounded-full cursor-pointer profileImg' src={user?.profileImage || avatarImage}/>
             {
              isDropDownToggle && (
                <div className='absolute right-0 mt-3 p-4 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50'>
                  <ul className='text-sm space-y-4'>
                     {
                      dropdownMenus.map((menu,index)=>(
                        <li key={index}>
                          <Link onClick={()=>setIsDropDownToggle(false)} className='dropdown-items no-hover' to={menu.path}>{menu.lable}</Link>
                        </li>

                      ))
                     }

                     <li><Link className='dropdown-items' onClick={handleLogout}>Logout</Link></li>
                  </ul>
                </div>
              )
             }
            </> : <Link to="/login"><i className="ri-user-line"></i></Link>}
          </span>
        </div>

      </nav>

      {
        isCartOpen && <CartModal isCartOpen={isCartOpen} handleCartToggle={handleCartToggle} products={products} />
      }



    </header>
  )
}

export default Navbar