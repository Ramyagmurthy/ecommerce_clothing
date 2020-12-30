//utility function allows us to keep clean and organise functions


//Adding /Item utility
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )
    //find method returns true if is true or it will return undefined
    if(existingCartItem){
        return cartItems.map(
            cartItem =>
            (cartItem.id === cartItemToAdd.id) ?
             {...cartItem, quantity: cartItem.quantity + 1}
            :
            cartItem
            //if it is not existing(false)
        )
    }
    return[...cartItems,{...cartItemToAdd, quantity: 1}]

    //array destructing inside
}

//Remove Item utility
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    //Removing whole cart item itself if at all the quantity reaches to 1
    if(existingCartItem.quantity === 1){
        return cartItems.filter(
            cartItem => cartItem.id !== cartItemToRemove.id
        )
    }
    return cartItems.map(
        cartItem => cartItem.id === cartItemToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1}
        :
        cartItem
    )
}