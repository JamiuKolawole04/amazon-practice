import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';

import './styles/header.css';
import logo from '../../asset/amazon_PNG11.png';
import { useStateValue } from '../../context/stateProvider';
import { auth } from '../../utils/firebase'

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (

        <header>
            <Link to="/">
                <img
                    className="header__logo"
                    src={logo}
                    alt="amazon logo"
                />
            </Link>


            {/* Getting the link from the video */}

            <div className="header__search">
                <input
                    className="header__searchInput"
                    type="text"
                    name=""
                    id=""
                />
                {/* LOGO */}
                <SearchIcon
                    className="header__searchIcon"
                />
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div
                        onClick={handleAuthentication}
                        className="header__option">
                        {/* user?.email || Guest */}
                        <span className="header__option__lineOne">
                            Hello {!user ? 'Guest' : user.email}
                        </span>
                        <span className="header__option__lineTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>


                <Link to="/orders">
                    <div className="header__option">
                        <span className="header__option__lineOne">
                            Returns
                        </span>
                        <span className="header__option__lineTwo">
                            & Orders
                        </span>
                    </div>
                </Link>



                <div className="header__option">
                    <span className="header__option__lineOne">
                        Your
                    </span>
                    <span className="header__option__lineTwo">
                        Prime
                    </span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__option__lineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>

        </header>

    );
}

export default Header;

