import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {fetchUser} from '../features/userSlice'


const Login = () => {
    const dispatch = useDispatch()
    const [credential, setCredential] = useState({
        email: 'johndosh1@test.com',
        password: '12345'
    })

    // const onChange = (e) => {setUserData({...userData, [e.target.name] : e.target.value})}
    // const onChangeProfile = e => {setProfileData({...profileData, [e.target.name] : e.target.value})}

    const handleChange = (e) => {
            console.log(e.target.name)
            setCredential({...credential, [e.target.name] : [e.target.value]})
            
    }

    const onSubmit = (e) => {
        e.preventDefault()
        return (
            dispatch(fetchUser(credential))
        )
    }


    return (
        <form action="" className="login" onSubmit={(e) => onSubmit(e)}>
            <input type="email" className="email" value={credential.email} onChange={(e) => handleChange(e)} placeholder="email" name="email" required/>
            <input type="password" className="password" value={credential.password} onChange={(e) => handleChange(e)} placeholder="password" name="password" required/>
            <input type="submit" value="Login" />
        </form>
    )
}




export default Login