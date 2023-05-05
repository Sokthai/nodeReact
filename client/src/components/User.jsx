import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'



const User = (props) => {
const {firstname, lastname, username, avatar, email, dateOfBirth, date} = props.value
return (
   <Fragment>
        <div className="form-group">
            <input type="text" placeholder="First Name" name="firstname" value={firstname} onChange={e => props.onChange(e)} required />
        </div>

        <div className="form-group">
            <input type="text" placeholder="Last Name" name="lastname" value={lastname}  />
        </div>

        <div className="form-group">
            <input type="text" placeholder="Username" name="username" value={username}  />
        </div>

        <div className="form-group">
            <input type="file" name="avatar" value={avatar}  />
        </div>

        <div className="form-group">
            <input type="email" placeholder="Email" name="email" value={email}  />
        </div>

        <div className="form-group">
            <input type="password" placeholder="password" name="password" value={password}  />
        </div>
        
        <div className="form-group">
            <input type="text" placeholder="Date Of Birth" name="dateOfBirth" value={dateOfBirth}  />
        </div>

        <input type="submit" className="btn btn-primary" value="Submit" />
   </Fragment> 
)
}

export default User