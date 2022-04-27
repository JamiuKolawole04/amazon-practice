import CheckoutProduct from '../CheckoutProduct';
import './styles/checkout.css';
import amazon_ad from '../../asset/Amazon_ad.jpg';
import Subtotal from '../Subtotal'
import { useStateValue } from '../../context/stateProvider';

const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src={amazon_ad}
                    alt=""
                />

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    {basket.map((item) => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        // hideButton
                        />
                    ))}
                    {/* Checkout product */}
                    {/* Checkout product */}
                    {/* Checkout product */}
                    {/* Checkout product */}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
                {/* <h2>Subtotal will go here</h2> */}
            </div>
        </div>

    );
};

export default Checkout;