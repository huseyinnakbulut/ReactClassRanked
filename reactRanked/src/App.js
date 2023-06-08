import React from 'react'
import { Container } from 'reactstrap'
import { Route, Routes } from 'react-router-dom'
import Order from './components/order/Order'
import Payment from './components/order/Payment'
import Footer from './components/footer/Footer'
import Header from './components/navi/Header'
import Mainpage from './components/root/Mainpage'
import Login from './components/LoginRegister/Login'
import Register from './components/LoginRegister/Register'

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Routes>
          <Route path="/mainpage" element={<Mainpage />} />

          <Route path="/order" element={<Order />} />
          <Route path="/payment" element={<Payment />} />
          {/* //<Route path="/Login" element={<Loginregister />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer/>
      </Container>
    </div>
  )
}

export default App
