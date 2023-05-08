import React , {Fragment} from 'react'
import User from './User'
import {useSelector} from 'react-redux'

const Register = () => {
    const user = useSelector(state => state.user.user)
    const amount = useSelector(state => state.user.amount)
    console.log(user)
    return(
        <form>
            <User/>
        </form>
    )



}


export default Register