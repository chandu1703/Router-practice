import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
 import Home from './router/Home'
 import About from './router/About'
 import Student from './router/Student'
 import Nav from './router/Nav'

const App = () => {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Student' element={<Student/>}/>


      </Routes>
    </Router>
  )
}

export default App