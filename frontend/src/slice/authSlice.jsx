import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    isLogin : localStorage.getItem("userData") ? true : false,
    userData : localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null
}


export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{

        authLogin:(state,action)=>{
            console.log("action.payload",action.payload)
            state.isLogin = true,
            state.userData = action.payload
            localStorage.setItem("userData", JSON.stringify(action.payload));
            
        },
        authLogout:(state,action)=>{
            state.isLogin= false,
            state.userData = null,
            localStorage.removeItem("userData")
            
        }
        
    }

})


export const { authLogin, authLogout } = authSlice.actions;

export default authSlice.reducer;