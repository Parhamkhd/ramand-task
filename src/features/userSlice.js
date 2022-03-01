import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token:localStorage.getItem("token")?localStorage.getItem("token"):null,
    userInfo:null
};

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setToken:(state,action)=>{
                state.token = action.payload;
                localStorage.setItem("token",action.payload);
        }
    }
});


export const { setToken } = userSlice.actions;

export default userSlice.reducer;