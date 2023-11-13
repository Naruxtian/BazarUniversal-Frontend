import React, {useState} from 'react'
import {GiShoppingBag} from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setSearchValue(e.target.value)
    }
  
    const handleSubmit = () => {
      navigate(`/items?search=${searchValue}`)
    }

  return (
    <div className='row'>
        <div className="col-2">
            <GiShoppingBag size={65} />
        </div>
        <div className="col-6">
            <br/>
            <input type='text' placeholder='Buscar' className='form-control'
            value={searchValue} onChange={(e)=> {handleChange(e)}} />
        </div>
        <div className="col-4">
            <br/>
            <button className='btn btn-primary' onClick={handleSubmit} >Buscar</button>
        </div>
    </div>
  )
}

export default SearchBar