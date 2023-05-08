import React , {Fragment} from 'react'
import User from './User'
import {useSelector} from 'react-redux'

const Register = () => {
    const user = useSelector(state => state.user)
    const amount = useSelector(state => state.amount)
    
    return(
        <form>
            <User/>

        </form>
    )



}


export default Register