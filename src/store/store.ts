import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import userSlice from 'entities/user/slice'

const store = configureStore({
    reducer:{
        user:userSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const UseAppSelector:TypedUseSelectorHook<RootState> = useSelector

export type SliceStatus = "pending"|"idle"|"rejected"
export interface SliceState<stateType>{
    state:stateType|null,
    status:SliceStatus,
    error:string|null,
}

export default store