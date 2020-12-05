import React, {useState} from 'react';
import { FaStar } from 'react-icons/fa';

const MyStarRating = ({hadnleRating}) => {

    const [rating, setRating] = useState(0);

    function handleChange(e) {
        setRating(e.target.value);
        hadnleRating(e);
    }


    return  (
        <div className="star-position">
            {[1, 2, 3, 4, 5].map((count, index) => {
                return (
                    <label key={index} >
                        <input name="rating" type="radio" value={index+1} onClick={ handleChange }/>
                        <FaStar className="star" color={ index+1 <= rating ? "#ffc107" : "#fefefe"} size={50}/>
                    </label>
                )
            })}
        </div>
    )
}


export default MyStarRating;