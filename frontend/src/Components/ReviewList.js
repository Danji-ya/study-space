import React from "react";
import ReviewStar from "./ReviewStar";
import { FaUserAlt } from 'react-icons/fa';

const ReviewList = ({ delComment, review, user }) => {

    function callDelete(text){
        delComment(text);
    }


    return (
        <li>
            <FaUserAlt className="user-icon" size={50} />
            { review.email === (user && user.email) ?
                (
                    <div className="review-list-text">
                        <ReviewStar  number={review.rating} /><br/>

                        작성자: {review.email}<button onClick={()=>callDelete(review.text)}>삭제</button><br/>
                        {review.text}
                    </div>
                ): (
                <div className="review-list-text">
                    <ReviewStar  number={review.rating} /><br/>
                    작성자: {review.email}<br/>
                    {review.text}
                </div>
                )
            }

        </li>
    );
};

export default ReviewList;