import React, { useEffect, useState } from 'react';
import "./recette.css";
import { useParams } from 'react-router-dom';

export const Recette = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Remplacez cette URL par l'URL de votre API pour obtenir les détails de la recette
    fetch(`http://localhost:3000/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error('Error fetching recipe:', error));
  }, [id]);

  console.log(recipe)

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className='recette'>
      <div className="view">
        <div className="view-image">
        <img src={new URL(`../../assets/${recipe.image}`, import.meta.url).href} alt={recipe.title} />
        </div>

        <div className="recipe-options">
          <div className="descriptions">
            <h3>{recipe.title}</h3>
            <p>{recipe.rating} étoiles</p>
          </div>

          {/* <div className="btn-evaluation">
            Re-évaluer
          </div> */}
        </div>
      </div>

      <div className='recette-details'>
        <RecetteComponent
          ingredients={recipe.ingredients}
          utensils={recipe.utensils}
          preparations={recipe.preparations}
        />
      </div>

      <div className="suggestions">
        <SuggestionsComponents />
      </div>
    </div>
  );
};

function SuggestionsComponents() {
  return (
    <>
      Suggestions
    </>
  );
}

function RecetteComponent({ ingredients, utensils, preparations }) {
  return (
    <>
      <div className='detail-element'>
        <h3>Ingrédients</h3>
        <hr />
        <br />
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className='detail-element'>
        <h3>Ustensiles</h3>
        <hr />
        <br />
        <ul>
          {utensils.map((utensil, index) => (
            <li key={index}>{utensil}</li>
          ))}
        </ul>
      </div>

      <div className='detail-element'>
        <h3>Préparations</h3>
        <hr />
        <br />
        <div className="preparation-container">
          {preparations.map((prep) => (
            <PreparationCard key={prep.step} tag={prep.step} description={prep.description} />
          ))}
        </div>
      </div>
    </>
  );
}

function PreparationCard({ tag, description }) {
  return (
    <div className='preparation-card'>
      <div className='tag-num'>{tag}</div>
      <div className="stape-description">
        {description}
      </div>
    </div>
  );
}
