import React from "react";
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";


const CheckoutPage = props => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Products</span>
                </div>

                <div className="header-block">
                    <span>Description</span>
                </div>

                <div className="header-block">
                    <span>Quantity</span>
                </div>

                <div className="header-block">
                    <span>Price</span>
                </div>

                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {
                props.cartItems.map(item => (<CheckoutItem  key={item.id} item={item} />))
            }

            <div className="total">
                <span>Total: ${props.cartTotal}</span>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        cartTotal: selectCartTotal(state)
    }
}

export default connect(mapStateToProps)(CheckoutPage);