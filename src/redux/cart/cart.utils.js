export const addItemToCart = (cartItems, cartItemToAdd) => {
    console.log(cartItems);
    const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
                ? {...cartItem, quiantity: cartItem.quiantity + 1}
                : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quiantity:1}]
}