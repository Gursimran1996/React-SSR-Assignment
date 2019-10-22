import React from 'react';

const Card = (props) => {
    return (
        <div className="cardWrapper">
            <div>
                <img src={props.cardData.thumbnail}/>
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
                {/* Product rating will come here */}
            </div>
            <div>
                {/* Product Price will Come here */}
            </div>
            <div className="cardFooter">
                {/* Button to add/ remove from cart */}
            </div>
        </div>
    );
}

export default Card;