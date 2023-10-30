import React from 'react'
import Counter from './pages/Counter'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './pages/About'
import GuestLayout from './layouts/GuestLayout'
import ContactDetails from "./pages/ContactDetails"
import UserProvider from './components/UserDetails'



export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GuestLayout />}>
            <Route index element={<Counter />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact/:name" element={<ContactDetails />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}
