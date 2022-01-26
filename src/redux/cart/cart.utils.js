export const addItemToCart = (cartItems, cartItemToAdd) => {
    let foundIndex = cartItems.findIndex(item => item.id === cartItemToAdd.id);
    if (foundIndex === -1) {
        return [...cartItems, {...cartItemToAdd, quantity: 1}]
    }

    let newCartItems = [...cartItems]
    newCartItems[foundIndex].quantity += 1
    return newCartItems;
}   