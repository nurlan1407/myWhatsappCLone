import { createSlice } from '@reduxjs/toolkit'
import { User } from './model'
import { SliceState } from 'store'
import { PayloadAction } from '@reduxjs/toolkit'


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
        }
    }
})

export default userSlice

export const {setUser} = userSlice.actions;