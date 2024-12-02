import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getBaseUrl } from '../../../utils/baseURL';


const reviewApi=createApi({
    reducerPath:"reviewApi",
    baseQuery:fetchBaseQuery({
        baseUrl:`${getBaseUrl}/api/reviews`,
        credentials:'include',
    }),
    tagTypes:['reviews'],
    endpoints:(builder)=>({
        postReview:builder.mutation({
            query:(postReview)=>({
                url:'/post-review',
                method:"POST",
                body:postReview,
                credentials:'include'
            }),
            invalidatesTags:["reviews"]
           
        }),

        getReviewsCount: builder.query({
            query: () => ({
                url: '/total-reviews',
                method: "GET",
            }),
            providesTags: ["reviews"],
        }),
        
        getReviewsByUserId:(builder).query({
            query:(userId)=>({
                url:`/${userId}`,
                method:"GET",
            }),
            providesTags: ["reviews"],
        })
    })
});

export const {usePostReviewMutation,useGetReviewsByUserIdQuery,useGetReviewsCountQuery}=reviewApi
export default reviewApi