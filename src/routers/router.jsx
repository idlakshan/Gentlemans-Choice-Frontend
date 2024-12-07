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
                path :"/shop/placeOrder",
                element:<PlaceOrder/>
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
  
])

export default router;