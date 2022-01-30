import React from "react";
import { connect } from 'react-redux';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from './../../redux/shop/shop.selector';
import store from './../../redux/store'

console.log('category page')

const CollectionPage = () => {

    return (
        <div className="category-page">
            <h1>Category Page</h1>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    let props = {
        collection: selectCollection(ownProps.match.params.categoryId, state)
    }
    console.log('props mapStateToProps', props);

    console.log('store.getState() === state', store.getState() === state);
    return props;
}

export default connect(mapStateToProps)(CollectionPage);