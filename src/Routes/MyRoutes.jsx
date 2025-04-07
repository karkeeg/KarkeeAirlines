import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../Pages/Layout'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Carousel from '../Components/Carousel'
import HomePage from '../Pages/HomePage'
import Data from '../Pages/Data'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Help from '../Pages/Help'
import FlightBooking from '../Pages/FlightBooking'
import TravelApp from '../Pages/TravelApp'
import Hotel from '../Pages/Hotel'
import Profile from '../Pages/Profile'

const MyRoutes = () => {
  return (
    <div>
<BrowserRouter>
<Routes>

    <Route path='/' element={<Layout/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/data' element={<Data/>}/>
    <Route path='/help' element={<Help/>}/>
    <Route path='/flight' element={<FlightBooking/>}/>
    <Route path='/hotel' element={<Hotel/>}/>
    <Route path='/profile' element={<Profile/>}/>
    
  
    
    </Route>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
</Routes>

</BrowserRouter>
        
    </div>
  )
}

export default MyRoutes