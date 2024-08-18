import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../components/card/Card';
import "./voirTout.css";

export const VoirTout = ({param}) => {
  const { contenu } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Remplacez cette URL par l'URL de votre API pour obtenir les recettes par catégorie
    fetch(`http://localhost:3000/recipes?${param}=${contenu}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [contenu]);

  return (
    <div className="contenant">
      <div className='contenant-title'>
        <h3>Voici nos {contenu}</h3>
      </div>

      <div className='contenant-body'>
        {data.length > 0 ? (
          data.map((recipe) => (
            <Card key={recipe.id} card={recipe} />
          ))
        ) : (
          <p>Aucune recette trouvée pour {contenu}</p>
        )}
      </div>
    </div>
  );
};
