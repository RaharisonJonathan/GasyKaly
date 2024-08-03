import React from 'react'
import "./card.css"
import poulet from '../../assets/poulet.jpeg'

export const Card = ({card}) => {
  return (
      <div class="card">
            <div className="container-image">
                <img src={poulet} alt="" />
            </div>
          <div className="container-text">
              <h2>Poulet au coco</h2>
              <div className="rating">
                <span className="star" data-value="5">&#9733;</span>
                <span className="star" data-value="4">&#9733;</span>
                <span className="star" data-value="3">&#9733;</span>
                <span className="star" data-value="2">&#9733;</span>
                <span className="star" data-value="1">&#9733;</span>
                <span className='notes'>4.7</span>
              </div>
            <div className="btn-div">
                    <button className="btn">La recette</button>
            </div>
          </div>
      </div>
  )
}
