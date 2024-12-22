import React from 'react'
import { useLogoutUserMutation } from '../../redux/features/auth/authApi';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/features/auth/authSlice';
import { toast } from 'sonner';

const AdminDashboard = () => {

    const [logoutUser] =useLogoutUserMutation();
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const navItems = [
        { path: '/dashboard/admin', label: 'Dashboard' },
        { path: '/dashboard/add-new-product', label: 'Add Product'  },
        { path: '/dashboard/manage-products', label: 'Manage Products' },
        { path: '/dashboard/users', label: 'Users'  },
        { path: '/dashboard/manage-orders', label: 'Manage Orders'  },

    ]

    const handleLogout=async()=>{
          try {
            await logoutUser().unwrap();
            toast.success('logged out successfully');
            dispatch(logout());
          } catch (error) {
            console.error("Failed to logout "+error);
            
          }
    }

    return (
        <div className="space-y-5 bg-white p-8 h-screen flex flex-col">
            <div className="flex-grow">
                <div className="nav__logo">
                    <Link to="/" className="text-[17px] md:text-[17px]">Gentleman's Choice <span>.</span></Link>
                    <p className="text-sm md:text-[12px] italic">User dashboard</p>
                </div>
                <hr className="mt-5" />
                <ul className="space-y-5 pt-5">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                end
                                className={({ isActive }) =>
                                    isActive ? "text-red-600 font-bold" : "text-black"
                                }
                                to={item.path}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-auto">
                <hr className="mb-3" />
                <button onClick={handleLogout} className="text-white bg-primary font-medium px-5 py-1 rounded-sm">
                    Logout
                </button>
            </div>
        </div>
    )
}

export default AdminDashboard
