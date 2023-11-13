import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const ItemCard = ({item}) => {
  const navigate = useNavigate();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'USD', 
    }).format(amount);
  };

  var rating = 0;
  if (item.rating) {
    rating = Math.round(item.rating);
  }
  var discountedPrice = 0;
  if (item.discountPercentage) {
    discountedPrice = item.price - (item.price * item.discountPercentage / 100);
  }

  const handleClick = () => {
    navigate(`/item/${item.id}`);
  }

  return (
    <div onClick={handleClick}>
        <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={item.thumbnail} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="row">
                <h5 className="card-title col-6">{item.title}</h5>
                <p className="card-title col-6 text-end">{item.category}</p>
              </div>
              <h5 className="card-subtitle"></h5>
              <p className="card-text">{item.description}</p>
              <div className="row">
                <p className="card-text col-6"><small className="text-muted">${formatCurrency(discountedPrice)}</small></p>
                <div className="col-6 text-end">
                  {[...Array(rating)].map((e, i) => <AiFillStar key={i} className='text-warning' />)}
                  {[...Array(5-rating)].map((e, i) => <AiFillStar key={i} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard