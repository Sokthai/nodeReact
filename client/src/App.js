import logo from './logo.svg';
import Register from '../src/components/RegisterForm'

import Store from './app/store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing'
import Profile from './components/Profile'

function App() {
  return (
      <Router>
        <Routes>
            <Route exact path='/' element={<Landing />}/>
            <Route exact path='/register/user' element={<Register/>}/>
            <Route exact path='/register/profile' element={<Profile/>}/>
        </Routes>
      </Router>
  );
}

export default App;
