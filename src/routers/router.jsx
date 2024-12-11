import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Category from "../pages/category/Category";
import Search from "../pages/search/Search";
import ShopPage from "../pages/shop/ShopPage";
import SingleProduct from "../pages/shop/ProductDetails/SingleProduct";
import Login from "../components/Login";
import Register from "../components/Register";
import PlaceOrder from '../pages/shop/PlaceOrder'
import PaymentSuccess from "../components/PaymentSuccess";
import DashboardLayout from "../pages/dashboard/DashboardLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/categories/:categoryName",
                element: <Category />
            },
            {
                path: "/search",
                element: <Search/>
            },
            {
                path:"/shop",
                element:<ShopPage/>
            },
            {
                path :"/shop/:id",
                element:<SingleProduct/>
            },
            {
                path :"/shop/place-order",
                element:<PlaceOrder/>
            },
            {
                path :"/success",
                element:<PaymentSuccess/>
            }

        ]

    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    },

   
    {
        path:'/dashboard',
        element: <DashboardLayout/>,
        children:[
            //user routes
            {
                path:'',
                element:<div>User Dashboard</div>
            },
            {
                path:'orders',
                element:<div>User Orders</div>
            },
            {
                path:'payments',
                element:<div>User Payments</div>
            },
            {
                path:'profile',
                element:<div>User Profile</div>
            },
            {
                path:'reviews',
                element:<div>User Reviews</div>
            },


            //admin routes

            {
                path:'admin',
                element:<div>Admin</div>
            },
            {
                path:'add-new-post',
                element:<div>New Post</div>
            },
            {
                path:'manage-products',
                element:<div>Manage-post</div>
            },
            {
                path:'update-product/:id',
                element:<div>Update post</div>
            },
            {
                path:'users',
                element:<div>All users</div>
            },
            {
                path:'manage-orders',
                element:<div>manage orders</div>
            },

        ]

    }
  
])

export default router;