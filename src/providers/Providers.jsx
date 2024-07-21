import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { NavRoutes } from 'src/routes/NavRoutes'
import { TanstackProviders } from './TanstackProviders'

export const Providers = () => {
  return (
    <Router>
      <TanstackProviders>
          <NavRoutes />
          <ToastContainer />  
      </TanstackProviders>
    </Router>
  )
}
