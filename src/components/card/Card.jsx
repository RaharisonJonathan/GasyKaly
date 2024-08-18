import React from 'react'
import "./card.css"
import { useNavigate } from 'react-router-dom'
import poulet from '../../assets/poulet.jpeg';

export const Card = ({ card }) => {
  const navigate = useNavigate();

  const showRecipe = () => {
    navigate(`/recette/${card.id}`);
  };

  const images = {
    'poulet.jpeg': poulet,
  };

  return (
    <div className="card" onClick={showRecipe}>
      <div className="container-image">
        <img src={new URL(`../../assets/${card.image}`, import.meta.url).href} alt={card.title} />
      </div>
      <div className="container-text">
        <h2>{card.title}</h2>
        <div className="rating">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className="star"
              data-value={index + 1}
              style={{ color: index < card.rating ? 'gold' : 'gray' }}
            >
              &#9733;
            </span>
          ))}
          <span className='notes'>{card.rating}</span>
        </div>
        <div className="btn-div">
          <button className="btn">La recette</button>
        </div>
      </div>
    </div>
  )
}
