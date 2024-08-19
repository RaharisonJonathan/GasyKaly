import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
export const Header = () => {
  let status = true;

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
    console.log(status);
  };

  let alertStatus = true;
  const showAlertSearch = () => {
    const alert = document.querySelector(".search-alert");

    if (alertStatus) {
      alert.style.scale = '1';
      document.querySelector(".rideau").style.display = "block";
      alertStatus = false;
    } else {
      alert.style.scale = '0';
      document.querySelector(".rideau").style.display = "none";
      alertStatus = true;
    }
    console.log(status);
  };

  return (
    <>
      <div className="header">
        <div className="header-main">
          <Link to={"/"}>
            <div className="logo">
              <h3>.Gasy</h3>
              <h3 style={{ color: "#52D960" }}>Kaly</h3>
            </div>
          </Link>
          <span className="input-search" onClick={showAlertSearch}>
            Search...
          </span>
          <div className="menu" onClick={showMenu}>
            <i className="fas fa-bars"></i>
          </div>
        </div>

        <div className="header-nav">
          <ul>
            <li>
              <span className="search-list" onClick={showAlertSearch}>
                <input type="search" placeholder="Search..." />
              </span>
            </li>
            <li className="nav" onClick={showMenu}><i class="fa-solid fa-house"></i><Link to={"/accueil"}>Accueil</Link></li>
            <li className="nav" onClick={showMenu}><Link to={"/global/plats"}>Plats</Link></li>
            <li className="nav" onClick={showMenu}><Link to={"/global/desserts"}>Desserts</Link></li>
            <li className="nav" onClick={showMenu}><Link to={"/global/goûters"}>Goûters</Link></li>
            <li className="nav" onClick={showMenu}><Link to={"/global/boissons"}>Jus</Link></li>
          </ul>
        </div>
      </div>

      <SearchAlert headfermeture={showMenu} fermer={showAlertSearch} />
      <div className='rideau' onClick={showAlertSearch}></div>
    </>
  );
};




export function SearchAlert({ fermer, headfermeture }) {
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
      <span onClick={fermer}>Fermer</span>
      <div className="header-search">
        <input
          type="search"
          placeholder="Search your food..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="container-list">
        <div className="results">
          {loading ? (
            <p>Loading...</p>
          ) : filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <CardSearch
                key={item.id} // Assurez-vous que `item.id` est une clé unique
                fermeture={fermer}
                headfermeture={headfermeture}
                card={item}
              />
            ))
          ) : (
            <p>No results found</p>
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
