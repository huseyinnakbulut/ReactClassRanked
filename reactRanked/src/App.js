import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Order from './components/order/Order'
import Payment from './components/order/Payment'
import Footer from './components/footer/Footer'
import Header from './components/navi/Header'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/order" element={<Order />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
