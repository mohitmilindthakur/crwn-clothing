import { createSelector } from 'reselect';



const selectCart = state => state.cart;

const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

export const selectCartItemCount = createSelector([selectCartItems], cartItems => {
    console.log('selectCartItemCount');
    return cartItems.reduce((acc, cur) => (acc + cur.quantity), 0)
})