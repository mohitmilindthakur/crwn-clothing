import React from "react";
import './header.styles.scss';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from './../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import {connect} from 'react-redux';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";



const Header = ({currentUser}) => {
    console.log('Header rendering')
    return (
        <div className="header">
            <Link to="/" className="logo-container" >
                <Logo className="logo" />
            </Link>

            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {currentUser ? <div onClick={() => auth.signOut()}>SIGN OUT</div> : <Link className="option" to="/sign-in">SIGN IN</Link>}
                <CartIcon />
            </div>
            <CartDropdown />
        </div>
    )
}


const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps)(Header);