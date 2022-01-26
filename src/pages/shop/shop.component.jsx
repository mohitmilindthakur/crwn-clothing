import React from 'react';
import collections from './data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';



class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections
        }
    }

    render() {
        return (
            <div className="shop-page"> 
                {
                    this.state.collections.map(item => {
                        return (
                            <CollectionPreview key={item.id} collection={item} />
                        )
                    })
                }
            </div>
        )
    }
}

export default ShopPage;