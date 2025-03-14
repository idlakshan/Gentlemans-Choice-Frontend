import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useLogoutUserMutation } from '../../redux/features/auth/authApi'
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';
import { logout } from '../../redux/features/auth/authSlice';

const UserDashboard = () => {
    const [logoutUser] =useLogoutUserMutation();
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const navItems = [
        {
            path: '/dashboard', label: 'Dashboard'
        },
        {
            path: '/dashboard/orders',
            label: "Orders"
        },
        {
            path: '/dashboard/payments',
            label: "Payments"
        },
        {
            path: '/dashboard/profile',
            label: "Profile"
        },
        {
            path: '/dashboard/reviews',
            label: "Reviews"
        },

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
                    <Link className="text-[17px]" to="/">Gentleman's Choice <span>.</span></Link>
                    <p className="text-sm italic">User dashboard</p>
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

export default UserDashboard
