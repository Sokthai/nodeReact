import React , {Fragment, useState} from 'react'
import User from './User'
import {useSelector} from 'react-redux'
import '../styling/form.css'
import Button from '@mui/material/Button'
import { matchPassword } from '../util/util'
import Profile from './Profile'
import { setAlert } from '../util/util'
import { Link , useNavigate, redirect} from 'react-router-dom'


const Register = () => {
    const user = useSelector(state => state.user)
    const amount = useSelector(state => state.amount)
    const navigate = useNavigate()


    const [userData, setUserData] = useState({
        firstname : '',
        lastname : '',
        username : '',
        email: '',
        password : '',
        confirmPassword : '',
        dateOfBirth : ''
    })

    


    const [profileData, setProfileData] = useState({
        street:'', 
        city:'', 
        state:'', 
        zipcode:'', 
        question1:'', 
        question2:'', 
        question3:'', 
        answer1:'', 
        answer2:'', 
        answer3:''
    })

    
    const {password, confirmPassword} = userData
    const onChange = (e) => {setUserData({...userData, [e.target.name] : e.target.value})}
    const onChangeProfile = e => {setProfileData({...profileData, [e.target.name] : e.target.value})}

    const onSubmit = async (e) => {
        e.preventDefault()
        alert("registered")
    }

    const onNext = async (e) => {
        e.preventDefault()
        if (matchPassword(password, confirmPassword)){
            alert("ok")
            // return navigate('/register/profile', {replace: true})
            // return redirect("/register/profile")
            
            return <Profile value = {userData} profile={profileData} onChange={onChangeProfile} onSubmit={e => onSubmit(e)} title='Register'/>
        }else{
            // alert("mismatch")
            setAlert("password is not match")
        }
    }

    return(

        <Fragment>
            <User  onChange = {onChange} onSubmit={e => onNext(e)} value = {userData} title = 'Next'/>
        </Fragment>
    )



}


export default Register