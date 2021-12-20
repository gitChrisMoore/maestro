import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'
import {render} from '@testing-library/react'
import { AuthProvider } from './contexts/Auth'


const AllTheProviders = ({children}) => {
  return (
      <Router>
        <AuthProvider>
            {children}
        </AuthProvider>
      </Router>
  )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}