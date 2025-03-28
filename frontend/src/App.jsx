import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import Collection from './pages/collection'
import About from './pages/about'
import Contact from './pages/Contact'
import Cart from './pages/cart'
import Login from './pages/login'
import PlaceOrder from './pages/placeOrder'
import Orders from './pages/Orders'
import Product from './pages/product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import Verify from './pages/Verify'
// import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/about' element={<About/>}/>    
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='product/:productId' element={<Product/>}/>
        <Route path='/verify' element={<Verify/>}/>
        </Routes>
      <Footer />
    
    </div>

  )
}

export default App