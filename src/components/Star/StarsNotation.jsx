import React from "react";
import Star from './Star'
const StarsNotation = (props) => {
    const rating = props.rating > 5 ? 5 : props.rating < 0 ? 0 : props.rating
    const starArrayElements = Array.from({ length: rating }, (_, i) => (
        <Star key={i} active={1} />
    ));
    const missingStars = 5 - starArrayElements.length ;
    if (missingStars) {
        for (let i = 0; i < missingStars; i++)
        starArrayElements.push(<Star key={5-i} active={0} />)
    }

    return (
        <div className="stars-notation-component">
            {starArrayElements}
        </div>
    );
};

export default StarsNotation;
