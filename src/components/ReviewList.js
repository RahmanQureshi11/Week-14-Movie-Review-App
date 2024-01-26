import React from 'react'
import ReviewForm from './ReviewForm'
// This component is to manage a list of reviews. 
function ReviewList(props) {
    const listOfReviews = []

    const uploadReview = (review) => {
      listOfReviews.push(review)
    }
// This will render a form for Review 
  return (
    <div>
      <ReviewForm id={props.id} uploadReview={uploadReview}/>
        {listOfReviews.map((review)=> 
        <div>
            <h3>{review.name}</h3>
            <h6>{review.desc}</h6>
        </div>)}
    </div>
  )
}

export default ReviewList