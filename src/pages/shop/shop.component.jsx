import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component.jsx';
import CollectionPage from '../collection/collection.component.jsx';


const ShopPage = ({match}) => {
    return (
        <div className="shop-page">
            <Switch>
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
            </Switch>
        </div>
    )
}


export default ShopPage