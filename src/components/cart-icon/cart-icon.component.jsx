import React from "react";
import {ReactComponent as ShoppingIcon} from './../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import {connect} from 'react-redux';
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemCount } from "../../redux/cart/cart.selectors";

const CartIcon = props => {
    console.log('carticon rendering');
    return (
        <div className="cart-icon" onClick={props.toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{props.itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps', 'cart-icon');
    return {
        itemCount: selectCartItemCount(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);