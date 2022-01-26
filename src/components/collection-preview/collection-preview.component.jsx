import React from "react";
import './collection-preview.styles.scss';
import CollectionItem from "../collection-item/collection-item.component";


const collectionPreview = ({collection}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{collection.title}</h1>
            <div className="preview">
                {
                    collection.items.slice(0, 4).map(item => {
                        return (
                            <CollectionItem key={item.id} item={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default collectionPreview;