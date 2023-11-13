import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Inicio from './pages/inicio'
import SearchRes from './pages/searchRes'
import Detail from './pages/detail'
import NotFound from './pages/notFound'

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/items' element={<SearchRes />} />
          <Route path='item/:id' element={<Detail/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App