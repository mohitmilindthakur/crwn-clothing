import { cartTypes } from "./cart.types"
import { addItemToCart, removeItemFromCart } from "./cart.utils"



const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartTypes.TOGGLE_CART_HIDDEN:
            return { ...state, hidden: !state.hidden }

        case 'HIDE_CART':
            return { ...state, hidden: true }

        case cartTypes.ADD_ITEM:
            return {...state, cartItems: addItemToCart(state.cartItems, action.payload)};

        case cartTypes.REMOVE_ITEM:
            return {...state, cartItems: state.cartItems.filter(item => item.id !== action.payload)}

        default:
            return state;
    }
}

export default cartReducer;