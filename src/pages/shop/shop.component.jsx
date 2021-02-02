import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {
    constructor (props) {
        super(props); 

        this.state = {
            collections: SHOP_DATA
        }
    }

    render () {
        // destruct collections data
        // pass data -> collection-preview
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map( ( {id, ...otherCollectionProps} ) => (
                        <div>
                            <CollectionPreview key={ id } { ...otherCollectionProps } />
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;