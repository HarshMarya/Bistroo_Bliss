import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import BookTable from './pages/BookTable'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/our-menu' element={<Menu/>}/>
      <Route path='/blog-page' element={<Blog/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
      <Route path='/book-a-table' element={<BookTable/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
