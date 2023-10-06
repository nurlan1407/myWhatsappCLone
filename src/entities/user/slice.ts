import { createSlice } from '@reduxjs/toolkit'
import { User } from './model'
import { SliceState } from 'store'
import { PayloadAction } from '@reduxjs/toolkit'
import { createProfile, login } from './api'

const initialState:SliceState<User>= {
    state:null,
    status:"idle",
    error:null
}

const userSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        setUser:(state, action: PayloadAction<User>)=>{
            state.state = action.payload
        },
        setImage:(state, action: PayloadAction<string>)=>{
            state.state!.avatar = action.payload
        },
        setDisplayName:(state, action:PayloadAction<string>)=>{
            state.state!.displayName = action.payload
        },
        setBio:(state, action:PayloadAction<string>)=>{
            state.state!.bio = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(createProfile.pending, (state,action)=>{
            state.status = 'pending'
        })
        builder.addCase(createProfile.fulfilled, (state,action)=>{
            state.status = 'idle'
            state.state = action.payload
            console.log(state.state);
            
        })
        builder.addCase(createProfile.rejected, (state,action)=>{
            state.status = 'rejected'
            // state.error = action.payload.msg
        })

        builder.addCase(login.pending, (state,action)=>{
            state.status = 'pending'
        })
        builder.addCase(login.fulfilled, (state,action)=>{
            state.status = 'idle'
            state.state = action.payload
            
        })
        builder.addCase(login.rejected, (state,action)=>{
            state.status = 'rejected'
            // state.error = action.payload.msg
        })
    }
})

export default userSlice

export const {setUser, setImage, setDisplayName, setBio} = userSlice.actions;