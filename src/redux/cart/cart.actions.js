import CartActionTypes from './cart.types'


export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

//Remove Item
export const removeItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

//Clear Item
export const clearItem = (item) => ({
    type: CartActionTypes.CLEAR_ITEM,
    payload: item
})