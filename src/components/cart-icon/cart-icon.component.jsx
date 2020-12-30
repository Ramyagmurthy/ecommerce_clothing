import './cart-icon.styles.scss'
import {connect} from 'react-redux'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import {toggleCartHidden} from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className = 'cart-icon' onClick = {toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


//Reduce Function
//takes two parameters
//1.callBack function(memorized part,new)
//2.Initial value for the memorize part
//const mapStateToProps = ({cart: {cartItems}}) => ({
//    itemCount: cartItems.reduce(
//        (accumulatedQuantity,cartItem) => accumulatedQuantity + cartItem.quantity
//        , 0)
//})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);