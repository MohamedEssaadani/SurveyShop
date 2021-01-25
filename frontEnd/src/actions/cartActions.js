import axios from "axios"

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  //get the product to add to cart
  const { data } = await axios.get(`/api/products/${id}`)

  //dispatch reducer to add the new item to the cart state
  dispatch({
    type: "CART_ADD_ITEM",
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      quantity,
    },
  })

  //use getState() to get the cart from the state & save it to localStorage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: "CART_REMOVE_ITEM",
    payload: id,
  })

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}
