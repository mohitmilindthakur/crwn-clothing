import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import store from "../../redux/store";
import CartItem from "../cart-item/cart-item.component";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = props => {
    console.log('cartdropdown render')
    console.log('props', props)
    return (
        !props.cartHidden && <div className="cart-dropdown">
            <div className="cart-items">
                {
                    props.cartItems.length ?
                    props.cartItems.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))
                    :
                    <span className="empty-message">Your cart is empty</span>
                }
                
                <CustomButton onClick={() => {props.history.push('/checkout');props.dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    )
}

document.addEventListener('keyup', (event) => {
    if (store.getState().cart.hidden) return;

    if (event.keyCode === 27) {
        store.dispatch({type: 'HIDE_CART'});
    }
})

// document.addEventListener('click', (event) => {
//     console.log('event', event);
//     if (!store.getState().cart.hidden) {
//         if (!event.target.closest('cart-dropdown')) {
//             console.log('hiding')
//             store.dispatch({type: 'HIDE_CART'});
//         }
//     }
// })

const mapStateToProps = state => {
    return {
        cartHidden: state.cart.hidden,
        cartItems: state.cart.cartItems,
        itemCount: state.cart.cartItems.reduce((acc, cur) => acc + cur, 0)
    }
}


export default connect(mapStateToProps)(withRouter(CartDropdown));