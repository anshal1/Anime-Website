import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Context from "../Context/Context";
import "../Style/MangaCard.css";
const AnimeCard = (props) => {
  // ? Animating states
  const [card_anima, setcard_anima] = useState("main_card_container")
  // ? Animating states End
  const location = useLocation();
  const c = useContext(Context);
  const { type,loading } = c;
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
    if(!loading){
        setcard_anima("main_card_container_animated");
    }
  }, [loading])
  return (
    <>
      <div className={card_anima} ref={seeRef} onClick={props.detail_page}>
        <div className="image">
          <img src={props.image} alt="" />
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
