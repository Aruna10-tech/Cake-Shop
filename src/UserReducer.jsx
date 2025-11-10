import { createSlice } from '@reduxjs/toolkit'
const userSlice = createSlice({
  name: 'user',
  initialState: {
    message: [],
  },
  reducers: {
    submit: (state, action) => {

    
      state.message.push(action.payload);
    },
    
  },
})

export const { submit } = userSlice.actions
export default userSlice.reducer
