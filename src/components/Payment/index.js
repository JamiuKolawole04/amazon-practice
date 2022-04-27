import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from '../../utils/axios';

import { useStateValue } from "../../context/stateProvider";
import CheckoutProduct from "../CheckoutProduct";
import { getBasketTotal } from "../../utils/reducer";
import './styles/payment.css';
import { db } from "../../utils/firebase";

const Payment = () => {

    const [{ basket, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // generating the special stripe secret to charge the customers
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total cin a currency subunits 
                url: `payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();

    }, []);

    // console.log(`THE SECRET IS  >>> ${clientSecret}`);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent === payment confirmation
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                // .add({
                //     basket: basket,
                //     amount: paymentIntent.amount,
                //     created: paymentIntent.created
                // })
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })


            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({
                type: 'EMPTY_BASKET'
            })
            // navigate.replace("/order");
            // navigate
            // <Navigate replace to="/order" />
            navigate("/orders", { replace: true });
        })
            .catch((err) => console.log(err))
    }

    const handleChange = (e) => {
        /**
         *  Listen for changes in the CardElement
         * and display any errors as the customer type their card details
         */
        setDisabled(e.empty);
        setError(e.error ? error.message : "");

    }
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                {/* Payment section - delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* Payment section - review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment section - review method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    value={getBasketTotal(basket)}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing </p> : "Buy Now"}</span>
                                    {/* Pay */}
                                </button>
                            </div>

                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Payment;