//If we define this initial state component takes the default value that got assigned

import { userActionTypes } from "./user.types"

const INITIAL_STATE = {
    currentUser: null 
}

//Reducer
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case userActionTypes.SET_CURRENT_USER: 
            return {
                currentUser: action.payload
            }
            default:
                return state
    }
}

export default userReducer