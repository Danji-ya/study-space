import React from "react";
import ReviewStar from "./ReviewStar";
import { FaUserAlt } from 'react-icons/fa';

const ReviewList = ({ review }) => {


    return (
        <li>
            <FaUserAlt className="user-icon" size={50} />
            <ReviewStar  number={review.rating} />
            <div>
                작성자: {review.email}<br/>
                {review.text}
            </div>
        </li>

    );
};

export default ReviewList;