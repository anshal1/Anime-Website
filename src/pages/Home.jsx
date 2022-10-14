import React from "react";
import AnimeCard from "./AnimeCard";
import "../Style/Home.css";
import Cp from "./Capatalize";
import { useContext } from "react";
import Context from "../Context/Context";
import { useState } from "react";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const c = useContext(Context);
  const { type, Animes, TopAnimes, loading, setAnimes, page, setPage } = c;
  const [ ThisPageLoad, setthisPageLoad ] = useState(false);
  const navigate = useNavigate();
  //   ? function to fetch popular anime when user scrolls to the end
  const popular = () => {
      setthisPageLoad(true);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5154136085msh01c144c95ca355dp130597jsncc2599e99240",
        "X-RapidAPI-Host": "gogoanime2.p.rapidapi.com",
      },
    };

    fetch(`https://gogoanime2.p.rapidapi.com/popular?page=${page}`, options)
      .then((response) => response.json())
      .then((response) => {
        setthisPageLoad(false);
        setAnimes(Animes.concat(response))
      })
      .catch((err) => {
        setthisPageLoad(false);
      });
  };
  const RecentEp = () => {
    setthisPageLoad(true);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5154136085msh01c144c95ca355dp130597jsncc2599e99240',
            'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
        }
    };

    fetch(`https://gogoanime2.p.rapidapi.com/recent-release?type=1&page=${page}`, options)
        .then(response => response.json())
        .then(response => {
            setthisPageLoad(false);
            setAnimes(Animes.concat(response))
        })
        .catch(err => {
            
            setthisPageLoad(false);
        });
}
const Geners = () => {
    setthisPageLoad(true);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5154136085msh01c144c95ca355dp130597jsncc2599e99240',
            'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
        }
    };

    fetch(`https://gogoanime2.p.rapidapi.com/genre/${type}?page=${page}`, options)
        .then(response => response.json())
        .then(response => {
            setthisPageLoad(false);
            setAnimes(Animes.concat(response));
        })
        .catch(err => {
            setthisPageLoad(false);
        });
}
  const Next = () => {
      setPage(page + 1);
    if(type === "popular"){
        popular();
    } else if(type === "recently added"){
        RecentEp()
    } else {
        Geners();
    }
  };
  const navigate_to =(id)=>{
    navigate(`/anime/${id}`);
  }
  return (
    <>
      <div className="main_home_container" id="for_scroll_refference">
        <div className="upper_container">
          {/* Showing top 5 anime in popular or any other category */}
          <div className="type_of_manga_showing">
            <h1>
              <span>Top 5</span>
              <span id="style_character"> {Cp(type).slice(0, 1)}</span>
              {Cp(type).slice(1)} Anime
            </h1>
          </div>
          {loading ? (
            <h1 style={{ textAlign: "center" }}>Please Wait...</h1>
          ) : (
            <div id="top_animes">
              {TopAnimes.map((e) => {
                return (
                  <AnimeCard
                    key={e.animeId}
                    image={e.animeImg}
                    name={e.animeTitle}
                    release={e.releasedDate ? e.releasedDate : e.episodeNum}
                    detail_page={()=>{navigate_to(e.animeId)}}
                  />
                );
              })}
            </div>
          )}
        </div>
        <div className="type_of_manga_showing">
          <h1>
            <span id="style_character">{Cp(type).slice(0, 1)}</span>
            {Cp(type).slice(1)} Anime
          </h1>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="anime_card_container">
            {Animes.map((e) => {
              return (
                <AnimeCard
                  key={e.animeId}
                  image={e.animeImg}
                  name={e.animeTitle}
                  release={e.releasedDate ? e.releasedDate : e.episodeNum}
                  detail_page={()=>{navigate_to(e.animeId)}}
                />
              );
            })}
          </div>
        )}
        {ThisPageLoad ? (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        ) : (
          ""
        )}
        <hr />
        <div className="pages_number">
          {page-1 === 501 ? (
            ""
          ) : (
            <h3 id="next" onClick={Next}>
              Next
            </h3>
          )}

          <h2 style={{ float: "right" }}>Page-{page-1}</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
