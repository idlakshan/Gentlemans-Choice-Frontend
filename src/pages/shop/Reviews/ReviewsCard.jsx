import React, { useState } from 'react'
import commerntorIcon from '../../../assets/avatar.png'
import formateDate from '../../../utils/formateDate'
import RatingStars from '../../../components/RatingStars'
import ReviewModel from './ReviewModel'

const ReviewsCard = ({productReviews}) => {
    console.log(productReviews)

    const [isOpen,setIsOpen]=useState(false)

    const handleOpenReviewModel=()=>{
          setIsOpen(true)
    }

    const handleCloseReviewModel=()=>{
        setIsOpen(false)
  }

  return (
    <div className='my-1 bg-white p-8'>
           {
            productReviews.length>0?(<div>
                <h3 className='text-lg font-medium'>All comments...</h3>
                <div>
                    {
                        productReviews.map((review,index)=>(
                          
                            
                            <div key={index} className='mt-4'>
                               <div className='flex items-center gap-4'>
                                   <img src={commerntorIcon} alt="" className='size-10' />
                                   <div className='space-y-1'>
                                    
                                    <p className='text-lg font-medium underline capitalize underline-offset-4 text-blue-400'>{review?.userId.username}</p>
                                    <p className='text-[12px] italic'>{formateDate(review?.updatedAt)}</p>
                                    <RatingStars rating={review?.rating}/>
                                     
                                   </div>
                               </div>
                               <div className='text-gray-600 border mt-1 p-2'>
                                  <p className='md:w-4/5'>{review?.comment}</p>
                               </div>
                            </div>
                        ))
                    }
                </div>
            </div>):<p>No reviews yet!</p>
           }

           <div className='mt-6'>
              <button onClick={handleOpenReviewModel} className='px-6 py-3 bg-primary text-white rounded-md'>Add A Review</button>
           </div>

           <ReviewModel isOpen={isOpen} handleCloseReviewModel={handleCloseReviewModel}/>
    </div>
  )
}

export default ReviewsCard