
//Action creator -- setCurrentUser
export const setCurrentUser = user => (

    //Action
    {
        type: 'SET_CURRENT_USER',    //mandatory
        payload: user   //payload--optional
    }
)
//Action creator
//export const addToCart = ProductDetails => (
//    {
//        type: 'ADD_TO_CART',    //mandatory
//        payload: ProductDetails   //payload--optional
//    }
//)