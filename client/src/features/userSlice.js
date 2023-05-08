import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user :[{
        firstname : 'cali',
        lastname : 'linux',
        age : 100
    }],
    amount : 0
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        increment : state => {
            state.amount += 1
        },
        decrement : state => {
            state.amount -= 1
        },
        user : (state, {payload}) => {
            state.user = payload
        }
    }
})

export const {increment, decrement, user} = userSlice.actions //action creatore are generated for each case reducer function

export default userSlice.reducer