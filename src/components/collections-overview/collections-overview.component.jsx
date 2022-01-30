import React from 'react';
import './collections-overview.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';
import { connect } from 'react-redux';

const CollectionsOverview = ({collections}) => {
    return (
        <div className="collections-overview">
            {
                collections.map(item => {
                    return (
                        <CollectionPreview key={item.id} collection={item} />
                    )
                })
            }
        </div>
    )
}



const mapStateToProps = state => {
    return {
        collections: state.shop.collections
    }
}

export default connect(mapStateToProps)(CollectionsOverview);