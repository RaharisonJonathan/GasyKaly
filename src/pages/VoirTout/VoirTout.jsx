import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../components/card/Card';
import "./voirTout.css";

export const VoirTout = ({param}) => {
  const { contenu } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Remplacez cette URL par l'URL de votre API pour obtenir les recettes par catégorie
    fetch(`https://mocki.io/v1/71ea0934-3484-4b48-a3fb-bb9ca5d04f5e`)
      .then((res) => res.json())
      .then((data) => setData(() =>{
        if(param === "category"){
          return(
            data.recipes.filter((item) => item.category === contenu)
          )
        }

        if(param === "subCategory"){
          return(
            data.recipes.filter((item) => item.subCategory === contenu)
          )
        }
      }))
      .catch((error) => console.error('Error fetching data:', error));
  }, [contenu]);

  console.log(data)

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
