import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Layout = () => {

    return (

        <div style={{ backgroundColor: 'white', color: 'black' }} >

            <Navbar />
            <Outlet />
            <Footer />

        </div>
    )
}
export default Layout