import {createSlice} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const initialState = {
    users : [{
        firstname: 'cali',
        lastname: 'Zeiss',
        age: 100
    }],
    amount : 1, 
    status : 200

}



export const userSlice = createSlice({
    
    name: 'user',
    initialState,
    reducers : {
        increment : state => {
            state.amount += 1
        }, 
        decrement : state => {
            state.amount -= 1
        },
        users : (state, {payload})  => {
            // const config = { headers : {'Content-Type:' : 'application/json'}}
            // let user = axios.post('/users', formData, config)
            console.log(payload)
            state.users = payload
            state.status = payload.status
        }

    }
})

export const {increment, decrement, users} = userSlice.actions //generate action creator

export const fetchUser = (credential) => async dispatch => {
    const getUserURL = 'http://localhost:8010/users/login'
    let payload = ''
    try{
        const response = await axios.get(getUserURL)
    }catch(error){
        console.log(error)
        console.log(error.response.status)
        payload = error.response.data
    }
    
    

    await dispatch(users(payload))
}






export default userSlice.reducer