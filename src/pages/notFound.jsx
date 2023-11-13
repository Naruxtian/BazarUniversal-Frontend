import React from 'react'
import SearchBar from '../components/searchBar';
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='text-center'>
        <SearchBar/>
        <br/>
        <h5>404 - No se encontró la página que buscas</h5>
        <br/>
        <Link to='/'>Volver al inicio</Link>
    </div>
  )
}

export default NotFound