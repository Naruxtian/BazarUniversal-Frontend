import React, { useState, useCallback, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SearchBar from '../components/searchBar';
import ItemCard from '../components/itemCard';

const SearchRes = () => {
  const [searchData, setSearchData] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get('search');

  const getSearchData = useCallback(async () => {
    if (searchValue !== null || searchValue !== '' || searchValue !== undefined) {
      const response = await fetch(`https://bazaruniversal-backend.onrender.com/api/items?q=${searchValue}`);
      const data = await response.json();

      setSearchData(data);
    }
  }, [searchValue]);

  useEffect(() => {
    getSearchData();
  }, [searchValue]);

  return (
    <div>
      <SearchBar/>
      <br/>
      <h5>Resultados de la busqueda de: {searchValue}</h5>
      <br/>
      {searchData && searchData.data != null ?
        (
          <div>
            {Object.values(searchData.data).map((item, index) => (
              <ItemCard item={item} key={index} />
            ))}
          </div>
        ) 
        : 
        (
          <div>
            <h5>Buscando...</h5>
          </div>
        )
      }
        

    </div>
  )
}

export default SearchRes