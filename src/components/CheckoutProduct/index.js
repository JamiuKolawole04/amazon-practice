import React from "react";
import StarIcon from '@material-ui/icons/Star';

import { useStateValue } from '../../context/stateProvider';
import './styles/CheckoutProduct.css';

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
    return (
        <div className="checkoutProduct">
            <img
                className="checkoutProduct__image"
                src={image}
                alt=""
            />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>
                            <StarIcon
                                className="starIcon"
                            />
                        </p>
                    ))}
                </div>

                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}


            </div>
        </div>
    );
}

export default CheckoutProduct;