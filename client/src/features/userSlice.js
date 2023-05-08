import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    user : [{
        firstname: 'cali',
        lastname: 'Zeiss',
        age: 100
    }],
    amount : 1
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers : {
        increment : state => {
            state.amount += 1
        }, 
        decrement : state => {
            state.amount += 1
        },
        user : (state, {payload})  => {
            state.user = payload
        }

    }
})

export const {increment, decrement, user} = userSlice.actions //generate action creator
export default userSlice.reducer