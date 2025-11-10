import { configureStore } from '@reduxjs/toolkit'
import userSlice from './UserReducer'

const Store = configureStore({
  reducer: {
    user: userSlice,
  },
})

export default Store
