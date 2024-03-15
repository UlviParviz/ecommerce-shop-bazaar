import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Header from './layouts/Header'
import Sidebar from './layouts/Sidebar'
import Footer from './layouts/Footer'
import Product from './components/Product'



const App = () => {
  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route  path="/" element={<Home />} />

        <Route path='/product/:id' element={<ProductDetails/>}/>

      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
  )
}

export default App