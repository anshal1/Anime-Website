import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Context from "../Context/Context";
import "../Style/MangaCard.css";
const AnimeCard = (props) => {
  const loc = useLocation();
  const location = useLocation();
  const c = useContext(Context);
  const { type } = c;
  const slice = (word) => {
    if (word) {
      if (word.length > 40) {
        return word.slice(0, 35) + "...";
      } else {
        return word;
      }
    }
  };
  const seeRef = useRef(null);
  useEffect(()=>{
    // ? Observer for animating card
    const card = document.querySelectorAll(".main_card_container");
    const observer = new IntersectionObserver(entries =>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.classList = "main_card_container_animated"
        }
      })
    }, {
      rootMargin: `${loc.pathname === "/anime/search" ? "50px": "50px"}`
    })
    card.forEach((c)=>{
      observer.observe(c);
    })
  }, [])
  return (
    <>
      <div className="main_card_container" ref={seeRef} onClick={props.detail_page}>
        <div className="image">
          <img src={props.image} alt="" loading="lazy" />
        </div>
        <div className="name">
          <p>{slice(props?.name)}</p>
          {location.pathname !== "/anime/search" ? (
            <div className="release">
              {type === "popular" ? <p>Release {props.release}</p> : ""}
              {type === "recently added" ? <p>Episode {props.release}</p> : ""}
              {type !== "popular" && type !== "recently added" ? (
                <p>Release {props.release}</p>
              ) : (
                ""
              )}
            </div>
          ) : (
            <p>{props.searchRelease}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AnimeCard;
