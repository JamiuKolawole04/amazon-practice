import React from 'react';

import Product from '../Product';
import Hero_image from '../../asset/Hero_image.jpg';
import lean_startup_img from '../../asset/lean_startup.jpg';
import mixer_img from '../../asset/mixer.jpg';
import ipad_img from '../../asset/iPad.jpg';
import modern_speaker_img from '../../asset/modern_speaker.jpg';
import watch_img from '../../asset/smart_watch.jpg';
import samsung_img from '../../asset/samsung_odyssey.jpg';


import './styles/home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img
                    className="home__image"
                    src={Hero_image}
                    alt="amazon-prime-video"
                />

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Business PaperBack"
                        price={29.99}
                        rating={5}
                        // image={lean_startup_img}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Liter Glass Bowl"
                        rating={4}
                        price={239.0}
                        image={mixer_img}
                    />
                    {/* product */}
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        // image={watch_img}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation ) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        // image={modern_speaker_img}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        // image={ipad_img}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        // image={samsung_img}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;