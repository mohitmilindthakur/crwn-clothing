import { userActionTypes } from './user.types'



const INITIAL_STATE = {
    currentUser: null,
    id: Date.now()
}



const userReducer = function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return { ...state, currentUser: action.payload }

        case 'TOGGLE_CART_HIDDEN':
            return { ...state, id: Date.now() }

        default:
            console.log('default', state)
            return state
    }
}

export default userReducer;