import React from "react";
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import { removeItem } from "../../redux/cart/cart.actions";


const CheckoutItem = props => {
    const {item: {imageUrl, name, price, quantity, id}, dispatch} = props;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <div className="name">{name}</div>
            <div className="quantity">{quantity}</div>
            <div className="price">{price}</div>
            <div className="remove-button" onClick={() => dispatch(removeItem(id))}>&#10005;</div>
        </div>
    )
}

export default connect()(CheckoutItem);