import React from 'react';
import './card.css';
import StarRatings from 'react-star-ratings';

const Card = (props) => {
    return (
        <div className="cardWrapper">
            <div>
                <img className="cardThumbnail" src={props.cardData.thumbnail} alt="image-thumbnail" />
            </div>
            <h3>
                {props.cardData.productName}
            </h3>
            <div className="description">
                <div>
                    {props.cardData.productDesc}
                </div>
            </div>
            <div className="rating">
                <StarRatings
                    rating={props.cardData.productRating}
                    starRatedColor="#EAC117"
                    numberOfStars={5}
                    starDimension="22px"
                    starSpacing="3px"
                    name='rating'
                />
                {
                    <div id="ratingCount">{`(${props.cardData.noOfRatings})`}</div>
                }
            </div>
            <div id="product__price">
                {`$  ${props.cardData.productPrice}`}
            </div>
            <div className="cardFooter">
                {/* Button to add/ remove from cart */}
                <button className="cartBtn">Add to Cart</button>
            </div>
        </div>
    );
}

export default Card;