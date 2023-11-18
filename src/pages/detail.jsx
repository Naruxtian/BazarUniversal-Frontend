import React, {useState, useEffect, useCallback} from 'react'
import {AiFillStar} from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import SearchBar from '../components/searchBar';

const Detail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [rating, setRating] = useState(0);
    const [discountedPrice, setDiscountedPrice] = useState(0);
    
    const getItemData = useCallback(async () => {
        const response = await fetch(`https://bazaruniversal-backend.onrender.com/api/items/${id}`);
        const data = await response.json();
        
        setItem(data.data);
        if (data.data.rating) {
          setRating(Math.round(data.data.rating));
        }
        if (data.data.discountPercentage) {
          setDiscountedPrice(data.data.price - (data.data.price * data.data.discountPercentage / 100));
        }
    }, [id]);

    useEffect(() => {
        getItemData();
    }, [id]);

    const formatCurrency = (amount) => {
      return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'USD', 
      }).format(amount);
    };

  return (
    <div>
      <SearchBar/>
      <br/>
      {item ?
      (
          <div className="row g-0">
            <div className="col-md-4">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
              <div class="carousel-inner">
                {
                  item.images.map((image, index) => {
                    return (
                      <div class={index === 0 ? "carousel-item active" : "carousel-item"}>
                        <img src={image} class="d-block w-100" alt="..."/>
                      </div>
                    )
                  })
                }
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
              </div>
            </div>
            <br/>
            <div className="col-md-8">
              <div className="row"></div>
                <h1 className="text-center">{item.title}</h1>
                <div className="text-center">
                    {[...Array(rating)].map((e, i) => <AiFillStar size={25} key={i} className='text-warning' />)}
                    {[...Array(5-rating)].map((e, i) => <AiFillStar size={25} key={i} />)}
                  </div>
                <h3 className="">{item.brand} - {item.category}</h3>
                <h5 className="card-subtitle"></h5>
                <p className="">{item.description}</p>
                <h5 className="">Stock: {item.stock}</h5>
                <div className="row">
                  <h4 className="text-decoration-line-through col-6">${formatCurrency(item.price)}</h4>
                  <h4 className="col-6">${formatCurrency(discountedPrice)}</h4>
                </div>
                <br/>
                <div className='text-center'>
                  <button type="button" className="btn btn-lg btn-success">Comprar</button>
                </div>
                
            </div>
          </div>
      )
      :
      (
        <div>
          <h5>Cargando...</h5>
        </div>
      )
      }
    </div>
  )
}

export default Detail