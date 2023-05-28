import {createSlice} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const initialState = {
    user : [{
        firstname: 'cali',
        lastname: 'Zeiss',
        age: 100
    }],
    amount : 1
}



export const userSlice = (formData) => createSlice({
    
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
            // const config = { headers : {'Content-Type:' : 'application/json'}}
            // let user = axios.post('/users', formData, config)
            state.user = payload
        }

    }
})

export const {increment, decrement, user} = userSlice().actions //generate action creator
export default userSlice.reducer