import React from "react";
import './collection-item.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import { connect } from 'react-redux';
import { addItem } from "../../redux/cart/cart.actions";


const CollectionItem = props => {
    let { item: { name, price, imageUrl } } = props
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={() => props.addItem(props.item)}>Add To Cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CollectionItem);