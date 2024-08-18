import React, { useEffect, useRef, useState } from "react";
import { Card } from "../card/Card";
import "./hero.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export const Hero = ({ tag, bg }) => {
  const [slideToShow, setSlideToShow] = useState(3);
  const [slideToScroll, setSlideToScroll] = useState(3);
  const [dataCard, setDataCard] = useState([]);
  
  const slider = useRef();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slideToShow,
    slidesToScroll: slideToScroll,
    className: "slide",
    arrows: true
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1150) {
        setSlideToShow(3);
        setSlideToScroll(3);
      } else if (window.innerWidth < 1150 && window.innerWidth >= 650) {
        setSlideToShow(2);
        setSlideToScroll(2);
      } else {
        setSlideToShow(1);
        setSlideToScroll(1);
      }
    };

    handleResize(); // Set initial values
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log('Fetched data:', data); // Debugging line
        setDataCard(data.filter((dataItems) => dataItems.subCategory === `${tag}`));
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // if(dataCard.length < 3){
  //   return (
  //     <>
  //     </>
  //   )
  // }

  return (
    <div className={`hero-container ${bg}`}>
      <div className="hero-header">
        <span className="hero-tag">Plats {tag}</span>
        <span className="hero-view-all"><Link to={`/global/type/${tag}`}>{"voir tout "}</Link></span>
        
      </div>

      <div className="container-slide">
        <Slider {...settings} ref={slider}>
          {dataCard.length > 0 ? (
            dataCard.slice(0, 10).map((recipe) => (
              <Card key={recipe.id} card={recipe} />
            ))
          ) : (
            <p>Aucune carte à afficher</p>
          )}
        </Slider>
      </div>
    </div>
  );
};
