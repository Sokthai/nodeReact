import logo from './logo.svg';
import Register from '../src/components/RegisterForm'

import Store from './app/store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {
  return (
      <Router>
        <Routes>
            <Route exact path='/' element={<Landing/>}/>
            <Route exact path='/register/user' element={<Register/>}/>
            <Route exact path='/register/profile' element={<Profile/>}/>
            <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </Router>
  );
}

export default App;
