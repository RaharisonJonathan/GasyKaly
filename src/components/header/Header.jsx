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
  return(
    <>
      <div className="search-alert">
      <span onClick={fermer}>fermer</span>
        <div className="header-search">
          <input type="search" placeholder="Search your food..." />
        </div>
        <div className="container-list">
          <select name="" id="">
            <option value="rien">Rien</option>
            <option value="rien">trois</option>
            <option value="rien">deus</option>
            <option value="rien">1</option>
          </select>
          <div className="results">
            Empty !
          </div>
        </div>
      </div>
    </>
  )
}
