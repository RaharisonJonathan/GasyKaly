import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
export const Header = () => {

  

  let status = true;
  const showMenu = () =>{
    const menu = document.querySelector('.header-nav')

    if(status){
      menu.style.top = '0'
      document.querySelector('.menu').innerHTML = 'x'
      status= false
    }
    else{
      menu.style.top = '-400px'
      document.querySelector('.menu').innerHTML = 'menu'
      status = true


    }
    console.log(status)
  }

  let alertStatus = true;
  const showAlertSearch = () => {
    const alert = document.querySelector(".search-alert")

    if(alertStatus){
      // alert.style.top = '0'
      alert.style.scale = '1'

      document.querySelector(".rideau").style.display = "block"

      alertStatus= false
    }
    else{
      // alert.style.top = '-800px'
      alert.style.scale = '0'
      document.querySelector(".rideau").style.display = "none"
      alertStatus = true
    }
    console.log(status)
  }
  
  return (
    <>
      <div className="header">
      <div className="header-main">
        <Link to={"/"}>
        <div className="logo">
          <h3>.Gasy</h3>
          <h3 style={{color: "#52D960"}}>Kaly</h3>
        </div>
        </Link>
        <span className="input-search" onClick={showAlertSearch}>
          Search...
        </span>
        <div className="identifiant"></div>
        <div className="menu" onClick={showMenu}>Menu</div>
      </div>

      <div className="header-nav">
        <ul>
          <li>
            <span className="search-list" onClick={showAlertSearch}>
              <input type="search" placeholder="Search..." />
            </span>
          </li>
          <li className="nav" onClick={showMenu}><Link to={"/accueil"}>Accueil</Link></li>
          <li className="nav" onClick={showMenu}><Link to={"/global/plats"}>Plats</Link></li>
          <li className="nav" onClick={showMenu}><Link to={"/global/desserts"}>Desserts</Link></li>
          <li className="nav" onClick={showMenu}><Link to={"/global/goûters"}>Goûters</Link></li>
          <li className="nav" onClick={showMenu}><Link to={"/global/boissons"}>Jus</Link></li>
        </ul>
      </div>
    </div>

    <SearchAlert fermer={showAlertSearch}/>
    <div className='rideau' onClick={showAlertSearch}>
            
    </div>
    </>
  );
};


export function SearchAlert({fermer}){

  const dataCard = {
    "id": 1,
    "title": "Ravitoto",
    "image": "ravitoto.webp",
    "category": "plats",
    "subCategory": "populaires",
    "rating": 4.5,
    "isRecommended": true,
    "isRecent": false,
    "ingredients": [
      "500g de feuilles de manioc",
      "300g de viande de porc",
      "2 oignons",
      "4 gousses d'ail",
      "1 cuillère à café de gingembre",
      "Sel, poivre"
    ],
    "utensils": [
      "Couteau",
      "Planche à découper",
      "Casserole",
      "Cuillère en bois",
      "Bol"
    ],
    "preparations": [
      {
        "step": 1,
        "description": "Hachez les feuilles de manioc."
      },
      {
        "step": 2,
        "description": "Découpez la viande de porc en morceaux."
      },
      {
        "step": 3,
        "description": "Faites revenir les oignons et l'ail dans une casserole avec un peu d'huile."
      },
      {
        "step": 4,
        "description": "Ajoutez la viande et faites-la dorer."
      },
      {
        "step": 5,
        "description": "Ajoutez les feuilles de manioc et le gingembre, puis laissez mijoter pendant 1 heure."
      }
    ]
  }
  return(
    <>
      <div className="search-alert">
      <span onClick={fermer}>fermer</span>
        <div className="header-search">
          <input type="search" placeholder="Search your food..." />
        </div>
        <div className="container-list">
          {/* <select name="" id="">
            <option value="rien">Rien</option>
            <option value="rien">trois</option>
            <option value="rien">deus</option>
            <option value="rien">1</option>
          </select> */}
          <div className="results">
            <CardSearch card={dataCard}/>
            <CardSearch card={dataCard}/>
            <CardSearch card={dataCard}/>
            <CardSearch card={dataCard}/>
          </div>
        </div>
      </div>
    </>
  )
}

function CardSearch({card}){
  return(
    <>
      <div className="card-search">
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
