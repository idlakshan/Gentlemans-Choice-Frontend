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
import PrivateRoute from "./PrivateRoute";
import UserDashboardMain from "../pages/dashboard/user/dashboard/UserDashboardMain";
import UserOrders from "../pages/dashboard/user/UserOrders";
import OrderDetails from "../pages/dashboard/user/OrderDetails";
import UserPayments from "../pages/dashboard/user/dashboard/UserPayments";
import UserReviews from "../pages/dashboard/user/dashboard/UserReviews";
import AdminDashboardMain from "../pages/dashboard/admin/dashboard/AdminDashboardMain";
import AddProduct from "../pages/dashboard/admin/addProduct/AddProduct";

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
            },
            {
                path :"/orders/:orderId",
                element:<OrderDetails/>
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
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children:[
            //user routes
            {
                path:'',
                element:<UserDashboardMain/>
            },
            {
                path:'orders',
                element:<UserOrders/>
            },
            {
                path:'payments',
                element:<UserPayments/>
            },
            {
                path:'profile',
                element:<div>User Profile</div>
            },
            {
                path:'reviews',
                element: <UserReviews/>
            },


            //admin routes

            {
                path:'admin',
                element:<PrivateRoute role="admin"><AdminDashboardMain/></PrivateRoute>
            },
            {
                path:'add-new-product',
                element:<PrivateRoute role="admin"><AddProduct/></PrivateRoute>
            },
            {
                path:'manage-products',
                element:<PrivateRoute role="admin"><div>Manage Post</div></PrivateRoute>
            },
            {
                path:'update-product/:id',
                element:<PrivateRoute role="admin"><div>Update Post</div></PrivateRoute>
            },
            {
                path:'users',
                element:<PrivateRoute role="admin"><div>All Users</div></PrivateRoute>
            },
            {
                path:'manage-orders',
                element:<PrivateRoute role="admin"><div>Manage Orders</div></PrivateRoute>
            },

        ]

    }
  
])

export default router;