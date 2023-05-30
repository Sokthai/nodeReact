import React, {useEffect} from 'react'
import { increment, decrement, user, fetchUser } from '../features/userSlice'
import { connect, useSelector, useDispatch} from 'react-redux'
import '../styling/error.css'


const Landing = ({users, amount, status}) => {
    // const [user, setUser] = useState({})
    useEffect(() => {   
        dispatch(fetchUser())
    }, [])
    // const users = useSelector(state => state.user.user)
    // const amount = useSelector(state => state.user.amount)
    const dispatch = useDispatch()
    return (
        <div className="landing">
            <p className="welcome">Welcome to landing page</p>
            <p>User profile</p>


            {
          
                (status === 200)?            
                    users.map((user, index) => {
                        
                        return(    
                            <div className="profile" key={index}>
                                <p className="firstname">Firstname: {user.firstname}</p>
                                <p className="lastname">Lastname: {user.lastname}</p>
                                <p className="age">{user.age}</p>
                            </div>

                        )
                    })
                :
                  
                    users.error.map((error, index) => {
                        return (
                            <div className="profileError" key={index}>
                                <p>{error.msg}</p>
                            </div>
                        )
                    })
                           

           
        }
            <h2>you click {amount}</h2>

            <button className="btnDecrement" onClick={() => dispatch(decrement())}>Decrement</button>
            <button className="btnIncrement" onClick={() => dispatch(increment())}>Increment</button>
            <button className="get-user" onClick={() => dispatch(fetchUser({email: 'test@gmail.com', password : '12345'}))}>Fetch User</button>

        </div>
    )
}



const mapStateToProps = (state) => {
    return ({
        users : state.user.users,
        amount: state.user.amount, 
        status: state.user.status
    })
}

export default connect(mapStateToProps, {fetchUser, decrement, increment})(Landing)
// export default Landing