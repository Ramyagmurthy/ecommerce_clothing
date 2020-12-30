import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
//import SHOP_DATA from './shop.data'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selector';

const ShopPage = ({collections}) =>  (
    <div className='shop-page'>
            {
                collections.map(({id,...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
    </div>
    )
    
const mapStateToProps = () => createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps,null)(ShopPage)   
