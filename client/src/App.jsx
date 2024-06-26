import { Route, Routes } from 'react-router-dom'
import './App.css'
import Changepassword from './pages/Changepassword'
import Login from './pages/Login'
import Otp from './pages/Otp'
import Resetpassword from './pages/Resetpassword'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Navbar from './components/Aside/Navbar'
import Messages from './pages/Messages'
import Settings from './pages/Settings'
import Accountfind from './pages/Accountfind'
import ProtectedRouteLog from './components/ProtectedRouteLog'
import ProtectedRoute from './components/ProtectedRoute'
import Newpost from './pages/Newpost'
import Profile from './pages/Profile'
import Strangersprofile from './pages/Strangersprofile'


function App() {

  return (
    <> 
    
    <Routes >
    <Route element={<ProtectedRouteLog/>}>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/otp' element={<Otp/>}/>
    <Route path='/accountfind' element={<Accountfind/>}/>
    <Route path='/resetpassword' element={<Resetpassword/>}/>
    </Route>
    
    <Route element={<ProtectedRoute/>}>
    <Route path='/settings' element={<Settings/>}/>
    <Route path='/messages' element={<Messages/>}/>
    <Route path='/changepassword' element={<Changepassword/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/strangersprofile' element={<Strangersprofile/>}/>
    <Route path='/newpost' element={<Newpost/>}/>
    </Route>

    {/* <Route path='/navbar' element={<Navbar/>}/> */}


    </Routes>

    </>
  )
}

export default App
