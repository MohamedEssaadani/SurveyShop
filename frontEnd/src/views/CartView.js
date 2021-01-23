import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../actions/cartActions"

function CartView({ match, location }) {
  const productId = match.params.id

  //if the qty then convert the search(where u find =) => ?qty=2 to array of [?qty, 2] & get index 1 to number
  const qty = location.search ? Number(location.search.split("=")[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  console.log(cartItems)

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  return <div>Cart</div>
}

export default CartView
