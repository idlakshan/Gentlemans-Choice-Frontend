import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getBaseUrl } from '../../../utils/baseURL';

const productApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${getBaseUrl()}/api/products`,
        credentials: 'include',
    }),
    tagTypes: ["products"],
    endpoints: (builder) => ({
        fetchAllProducts: builder.query({
            query: ({ category, color, minPrice, maxPrice, page = 1, limit = 10 }) => {
                const queryParams = new URLSearchParams({
                    category: category || '',
                    color: color || '',
                    minPrice: minPrice || 0,
                    maxPrice: maxPrice || '',
                    page: page.toString(),
                    limit: limit.toString()
                }).toString();
                return `/?${queryParams}`
            },
            providesTags: ["products"]
        }),
        fetchProductById: builder.query({
            query: (id) => ({
                url: `/${id}`,
                method: "GET"
            }),
            providesTags: (result, error, id) => [{ type: "products", id }]
        }),
        addProduct: builder.mutation({
            query: (newProduct) => ({
                url: '/create-product',
                method: "POST",
                body: newProduct,   
            }),
            invalidatesTags: ["products"]
        }),
        updateProduct: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `/update-product/${id}`,
                method: "PATCH",
                body: rest,
                credentials: "include"
            }),
            invalidatesTags: (result, error, {id}) => [{ type: "products", id }],
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
                credentials: 'include'
            }),
            // invalidatesTags: (res, error, id) => [{ type: "products", id }]
            invalidatesTags:["products"]
        })
    })
});

export const {useFetchAllProductsQuery,useFetchProductByIdQuery,useAddProductMutation,useUpdateProductMutation,useDeleteProductMutation}=productApi;
export default productApi