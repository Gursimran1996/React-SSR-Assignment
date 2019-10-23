import React from 'react';
import './card.css';
// import StarRatings from 'react-star-ratings';

const Card = (props) => {
    return (
        <div className="cardWrapper">
            <div>
                <img className="cardThumbnail" src={props.cardData.thumbnail} alt="image-thumbnail" />
            </div>
            <h3>
                {props.cardData.productName}
            </h3>
            <div>
                <p>
                    {props.cardData.productDesc}
                </p>
            </div>
            <div>
                {/* <StarRatings
                    rating={props.cardData.productRating}
                    starRatedColor="#EAC117"
                    numberOfStars={5}
                    starDimension="18px"
                    name='rating'
                /> */}{
                    `(${props.cardData.noOfRatings})`
                }
            </div>
            <div>
                {`$ ${props.cardData.productPrice}`}
            </div>
            <div className="cardFooter">
                {/* Button to add/ remove from cart */}
            </div>
        </div>
    );
}

export default Card;