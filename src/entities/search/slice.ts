import { createSlice } from '@reduxjs/toolkit'
import { User } from '../user/model'
import { SliceState } from 'store'
import { PayloadAction } from '@reduxjs/toolkit'
import { searchUsers } from './api'

const initialState:SliceState<User[]>= {
    state:null,
    status:"idle",
    error:null
}

const searchSlice = createSlice({
    name:"searchSlice",
    initialState,
    reducers:{
        setUsers:(state,action:PayloadAction<User[]>)=>{
            state.state = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(searchUsers.pending,(state, action)=>{
            state.status = 'pending'
        }),
        builder.addCase(searchUsers.fulfilled,(state, action)=>{
            state.state = action.payload
            state.status = 'idle'
        })
        builder.addCase(searchUsers.rejected,(state, action)=>{
            state.error = action.payload!.msg
            state.status = 'idle'
        })
    }
})

export default searchSlice

export const { setUsers } = searchSlice.actions