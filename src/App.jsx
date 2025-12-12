import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import User_Login from './Pages/User_Login'
import UserSignUp from './Pages/UserSignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLogin from './Pages/UserLogin'
import UserForgot from './Pages/UserForgot'
// import Dashboard from './Pages/Dashboard_Home'
import Dashboard_Home from './Pages/Dashboard_Home'
import Dashboard from './Components/Dashboard'
import Tasks from './Components/Tasks'
import Team from './Components/Team'
import Trash from './Components/Trash'
// import User_Forgot from './Pages/User_Forgot'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <User_Login /> */}
      {/* <User_SignUp /> */}
      {/* <User_Forgot /> */}

      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<UserLogin />}> </Route>
          <Route path='/sinup' element={<UserSignUp />}></Route>
          <Route path='/forgotPassword' element={<UserForgot />}/>
          <Route path='/dashboardHome' element={<Dashboard_Home />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='tasks' element={<Tasks />} />
            <Route path='team' element={<Team />} />
            <Route path='trash' element={<Trash />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
