export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "CART_ADD_ITEM":
      //get the item to add
      const item = action.payload
      //get the item if already exist in the cartItems
      const existItem = state.cartItems.find((i) => i.product === item.product)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === existItem.product ? item : i
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    case "CART_REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      }
    default:
      return state
  }
}
