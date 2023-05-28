import React, {Fragment} from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'



const User = (props) => {
    const {firstname, lastname, username, email, dateOfBirth, date, password, confirmPassword} = props.value

    const dispatch = useDispatch()
    return (
        <form className='form-input' onSubmit={e => props.onSubmit(e)}>
            <div className="form-group">
                <input type="text" placeholder="First Name" name="firstname" value={firstname} onChange={e => props.onChange(e)} required />
            </div>

            <div className="form-group">
                <input type="text" placeholder="Last Name" name="lastname" value={lastname}  onChange={e => props.onChange(e)} required/>
            </div>

            <div className="form-group">
                <input type="text" placeholder="Username" name="username" value={username}  onChange={e => props.onChange(e)} required/>
            </div>

            <div className="form-group">
                <input type="email" placeholder="Email" name="email" value={email}   onChange={e => props.onChange(e)} required/>
            </div>

            <div className="form-group">
                <input type="password" placeholder="password" name="password" value={password}  onChange={e => props.onChange(e)} required />
            </div>

            <div className="form-group">
                <input type="password" placeholder="confirm password" name="confirmPassword" value={confirmPassword}   onChange={e => props.onChange(e)} required/>
            </div>
            
            <div className="form-group">
                <input type="text" placeholder="Date Of Birth" name="dateOfBirth" value={dateOfBirth}  onChange={e => props.onChange(e)} required />
            </div>

            <input type="submit" className="btn btn-primary" value={props.title} />
        </form>
    )
}
export default User