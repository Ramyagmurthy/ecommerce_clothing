import {createSelector} from 'reselect'

//Input selector

const selectCart = state => state.cart

//FOr Selecting Cart Items from the Cart

export const selectCartItems = createSelector(
    [selectCart],
    (
        cart => cart.cartItems
    )
)
//For selecting Item Count

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (
        cartItems => cartItems.reduce(
            (accumulatedQuantity, {quantity}) => accumulatedQuantity + quantity
            ,0)
        )
    )

//For Hidden Property

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)
//select cart total
export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price
        ,0))
    )

