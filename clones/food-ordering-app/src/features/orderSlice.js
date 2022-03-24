import { createSlice } from '@reduxjs/toolkit'
import mushroomPizza from '../assets/images/food/mushroomPizza.jpg'

const initialState = {
  orders: [],
}

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addItem: (state, action) => {
      let newItem = true

      state.orders.map(item => {
        if (item.title === action.payload.name) {
          item.quantity += 1
          item.subtotal = item.quantity * item.price
          newItem = false
        }
      })

      newItem &&
        state.orders.push({
          title: action.payload.name,
          price: action.payload.price,
          quantity: 1,
          subtotal: action.payload.price,
          image: action.payload.image,
        })
    },
    removeItem: (state, action) => {
      if (action.payload.quantity === 1) {
        state.orders = state.orders.filter(
          item => item.title !== action.payload.title,
        )
      } else {
        state.orders.map((item, index) => {
          if (item.title === action.payload.title) {
            state.orders[index].quantity -= 1
            state.orders[index].subtotal =
              state.orders[index].quantity * state.orders[index].price
          }
        })
      }
    },
  },
})

export const { addItem, removeItem } = orderSlice.actions
export const selectOrderList = state => state.orders.orders
export default orderSlice.reducer

const orders = [
  {
    title: 'randomPizza',
    price: 7.49,
    quantity: 1,
    subtotal: 7.49,
    image: mushroomPizza,
  },
  {
    title: 'anotherPizza',
    price: 7.49,
    quantity: 2,
    subtotal: 14.98,
    image: mushroomPizza,
  },
]

const item = {
  name: 'Hot Dog',
  price: 5.99,
  rating: 4,
  emoji: '🌭',
}