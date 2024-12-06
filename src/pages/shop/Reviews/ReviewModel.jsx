import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { usePostReviewMutation } from '../../../redux/features/reviews/reviewsApi';
import { comment } from 'postcss';
import { useFetchProductByIdQuery } from '../../../redux/features/product/productApi';
import { toast } from 'sonner';

const ReviewModel = ({ isOpen, handleCloseReviewModel }) => {
  const [rating, setRating] = useState(0);
  const { id } = useParams();
  const user = useSelector((store) => store.auth.user);
  const { refetch } = useFetchProductByIdQuery(id);
  const [postReview] = usePostReviewMutation();
  const [comment, setComment] = useState('')

  const handleRating = (value) => {
    setRating(value)
  }

  const handleSubmit = async (e) => {
    console.log(user._id);

    e.preventDefault();
    const newComment = {
      comment: comment,
      rating: rating,
      userId: user?._id,
      productId: id
    }

    try {
      const response = await postReview(newComment).unwrap();
      //console.log(response);

      toast.success("Comment posted successfully!");
      setComment('');
      setRating(0);
      refetch()
      handleCloseReviewModel()

    } catch (error) {
      console.log(error);
      if (error?.data?.errors) {
        const errorMessage = error.data.errors[0]?.message;
        if (errorMessage) {
          toast.error(errorMessage);  
        } else {
          toast.error('An unexpected error occurred.');
        }
      } else {
        toast.error('An error occurred while posting the review.');
      }

    }
  }

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white p-6 rounded-lg w-96">
        <div className="flex justify-between items-center">
          <h2 className='text-lg font-medium mb-4'>Post a Review</h2>
          <button
            onClick={handleCloseReviewModel}
            className="text-gray-500 hover:text-gray-700 mb-4"
          >
            &times;
          </button>
        </div>
        <div className="">

          <div className='flex items-center mb-4'>
            {
              [1, 2, 3, 4, 5].map((star) => (
                <span key={star} onClick={() => handleRating(star)} className='cursor-pointer text-yellow-500 text-xl'>
                  {
                    rating >= star ? (<i className='ri-star-fill'></i>) : (<i className='ri-star-line'></i>)
                  }
                </span>
              ))
            }
          </div>
          <textarea
            name=""
            id=""
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            className="w-full border border-gray-300 rounded-md mb-4 p-2 focus:outline-none"
          >
          </textarea>

          <div className='flex justify-end gap-2'>
            <button onClick={handleCloseReviewModel} className='px-4 py-2 bg-gray-300 rounded-md'>Cancel</button>
            <button onClick={handleSubmit} className='px-4 py-2 bg-primary text-white rounded-md'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewModel;
