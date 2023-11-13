import React, { useState } from 'react'
import {GiShoppingBag} from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'

const Inicio = () => {
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleSubmit = () => {
    navigate(`/items?search=${searchValue}`)
  }

  return (
    // Centar el contenido
    <div className='text-center'>
      <br/><br/>
      <GiShoppingBag size={100} />
      <br/><br/>
      <h1>BAZAR UNIVERSAL</h1>
      <br/><br/>
      <input type='text' placeholder='Buscar' className='form-control' 
      value={searchValue} onChange={(e)=> {handleChange(e)}} />
      <br/><br/>
      <button className='btn btn-lg btn-primary' onClick={handleSubmit} >Buscar</button>
      
    </div>
  )
}

export default Inicio