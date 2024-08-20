import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
export const Header = () => {
  let status = true;
  const inputRef = useRef(null);

  const showMenu = () => {
    const menu = document.querySelector('.header-nav');

    if (status) {
      menu.style.top = '0';
      document.querySelector('.menu').innerHTML = '<i class="fas fa-times"></i>';
      status = false;
    } else {
      menu.style.top = '-400px';
      document.querySelector('.menu').innerHTML = '<i class="fas fa-bars"></i>';
      status = true;
    }
  };

  let alertStatus = true;
  const showAlertSearch = (nettoie) => {
    
    const alert = document.querySelector(".search-alert");

    if (alertStatus) {
      alert.style.scale = '1';
      document.querySelector(".rideau").style.display = "block";
      alertStatus = false;
      inputRef.current.focus()
    } else {
      alert.style.scale = '0';
      document.querySelector(".rideau").style.display = "none";
      alertStatus = true;
      inputRef.current.value = ""
      nettoie("")

    }
  };

  return (
    <>
      <div className="header">
        <div className="header-main">
          <Link to={"/"}>
          <div className="logo" onClick={() => status ? console.log(status) : showMenu()}>
              <h3>.Gasy</h3>
              <h3 style={{ color: "#52D960" }}>Kaly</h3>
            </div>
          </Link>
          <span className="input-search" onClick={showAlertSearch}>
          <i className="fas fa-search search-icon"></i>
          </span>
          <div className="menu" onClick={showMenu}>
            <i className="fas fa-bars"></i>
          </div>
        </div>

        <div className="header-nav">
          <ul>
            <li>
              <span className="search-list" onClick={showAlertSearch}>
                <input type="search" placeholder="Chercher..." />
              </span>
            </li>
            <li className="nav" onClick={showMenu}>
              <Link to={"/accueil"}>
                <i className="fas fa-home"></i> Accueil
              </Link>
            </li>
            <li className="nav" onClick={showMenu}>
              <Link to={"/global/plats"}>
                <i className="fas fa-utensils"></i> Plats
              </Link>
            </li>
            <li className="nav" onClick={showMenu}>
              <Link to={"/global/desserts"}>
                <i className="fas fa-ice-cream"></i> Desserts
              </Link>
            </li>
            <li className="nav" onClick={showMenu}>
              <Link to={"/global/goûters"}>
                <i className="fas fa-cookie-bite"></i> Goûters
              </Link>
            </li>
            <li className="nav" onClick={showMenu}>
              <Link to={"/global/boissons"}>
                <i className="fas fa-glass-martini-alt"></i> Jus
              </Link>
            </li>

          </ul>
        </div>
      </div>

      <SearchAlert headfermeture={showMenu} reference={inputRef} fermer={showAlertSearch} />
      <div className='rideau' ></div>
    </>
  );
};




export function SearchAlert({ fermer, headfermeture, reference }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [dataCards, setDataCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredResults, setFilteredResults] = useState([]);




  useEffect(() => {
    
    // Remplacez cette URL par l'URL de votre API
    fetch("https://mocki.io/v1/71ea0934-3484-4b48-a3fb-bb9ca5d04f5e")
      .then((response) => response.json())
      .then((data) => {
        setDataCards(data.recipes); // Assurez-vous que la structure des données correspond à celle que vous attendez
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des données:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Filtrer les résultats en fonction du terme de recherche
    if (searchTerm === "") {
      setFilteredResults([]);
    } else {
      const results = dataCards.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResults(results);
    }
  }, [searchTerm, dataCards]);

  
  

  return (
    <div className="search-alert">
      <span onClick={() =>{
        fermer(setSearchTerm)
        
      }}><i class="fas fa-times"></i></span>
      <div className="header-search">
      <i className="fas fa-search search-icon"></i>
      <input
        type="search"
        placeholder="Chercher la recette..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        ref={reference}
      />
    </div>

      <div className="container-list">
        <div className="results" >
          {loading ? (
            <p>Loading...</p>
          ) : filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <CardSearch
                key={item.id} // Assurez-vous que `item.id` est une clé unique
                fermeture={() =>{
                  fermer(setSearchTerm)
                }}
                headfermeture={headfermeture}
                card={item}
              />
            ))
          ) : (
            <p>Aucune recette trouvée</p>
          )}
        </div>
      </div>
    </div>
  );
}

function CardSearch({card, fermeture, headfermeture}){
  let navigate = useNavigate()
  return(
    <>
      <div className="card-search" onClick={() => {
        fermeture()
        headfermeture()
        navigate(`/recette/${card.id}`)
        console.log("rien")
      }}>
        <div className="card-search-image">
        <img src={new URL(`../../assets/${card.image}`, import.meta.url).href} alt={card.title} />
        </div>
        <div className="card-search-text">
          <h2>{card.title}</h2>
          <div className="card-search-rating">
            {Array.from({ length: 5 }, (_, index) => (
              <span
                key={index}
                className="card-search-star"
                data-value={index + 1}
                style={{ color: index < card.rating ? 'gold' : 'gray' }}
              >
                &#9733;
              </span>
            ))}
            <span className='card-search-notes'>{card.rating}</span>
          </div>
          <div className="descriptions">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, pariatur quo consequuntur iure aliquam atque sapiente officiis culpa blanditiis, cumque nesciunt, maiores labore? Vitae, corporis!
          </div>
        </div>
      </div>
    </>
  )
}
