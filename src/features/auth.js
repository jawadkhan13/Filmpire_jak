import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isAuthenticated: false,
    sessionId: '',
  };

  
const authSclice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            state.isAuthenticated = true
            state.sessionId = localStorage.getItem('session_id')

            localStorage.setItem('acountId', action.payload.id)
        }
    }
})

export const { setUser } = authSclice.actions;

export default authSclice.reducer;

export const userSelector = (state) => state.user