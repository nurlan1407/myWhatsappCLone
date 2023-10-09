import { createAsyncThunk } from "@reduxjs/toolkit"
import {User} from '../user/model'
import { ErrorResponse } from '../types'


export const searchUsers = createAsyncThunk<User[],string, {rejectValue:ErrorResponse}>(
    "serach/onSearch",
    async (query, ThunkApi) =>{
        try{
            console.log(query)
            const response = await fetch(`http://localhost:5001/user/search?query=@${query}`, {
                method: "GET",
            })
            const data = await response.json()
            if (!response.ok) {
                return ThunkApi.rejectWithValue({ msg: data.msg })
            }
            const users = data.users
            console.log(users);
            
            return users
        }catch(e){
            return ThunkApi.rejectWithValue({msg:e})
        }
    }
)