import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Context from "../Context/Context";
import "../Style/AnimeDetails.css";
import Loading from "./Loading";
const AnimeDetails = () => {
  const location = useLocation();
  const c = useContext(Context);
  const { loading, setloading } = c;
  const [details, setdetails] = useState({});
  const [details_geners, setdetails_geners] = useState([]);
  const [details_ep, setdetails_ep] = useState([]);
  const Details = () => {
    setloading(true);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5154136085msh01c144c95ca355dp130597jsncc2599e99240",
        "X-RapidAPI-Host": "gogoanime2.p.rapidapi.com",
      },
    };

    fetch(
      `https://gogoanime2.p.rapidapi.com/anime-details/${location.pathname.slice(
        7
      )}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          setdetails(response);
          setdetails_geners(response.genres);
          setdetails_ep(response.episodesList);
        }
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
      });
  };
  useEffect(() => {
    Details();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="main_details_container">
          <div className="info_container">
            <div className="anime_image">
              <img src={details.animeImg} alt="" />
            </div>
            <div className="anime_data">
              <h1>
                <span className="infos_info">Title:</span> {details.animeTitle}
              </h1>
              <h4>
                <span className="infos_info">OtherNames:</span>{" "}
                {details.otherNames}
              </h4>
              <h4>
                <span className="infos_info">Sypnosis:</span> {details.synopsis}
              </h4>
              <h4>
                <span className="infos_info">Episodes:</span>{" "}
                {details.totalEpisodes}
              </h4>
              <h4>
                <span className="infos_info">Type:</span> {details.type}
              </h4>
              <h4>
                <span className="infos_info">Status:</span> {details.status}
              </h4>
              <h4>
                <span className="infos_info">Released:</span>{" "}
                {details.releasedDate}
              </h4>
              <h4>
                <span className="infos_info">Geners:</span>{" "}
                {details_geners.map((e) => {
                  return e + " ";
                })}
              </h4>
            </div>
          </div>
          <hr />
          <div className="episodes_titlt">
            <h1>Episodes</h1>
          </div>
          <div className="episode_container">
            {/* // eslint-disable-next-line */}
            {details_ep.map((e) => {
              // eslint-disable-next-line
              if (e.length > 99) {
                // eslint-disable-next-line
                return(e.map((ele) => {
                  return (
                    <a href={ele.episodeUrl} rel="noreferrer" target="_blank">
                      <h3 key={ele.episodeNum}>
                        <span className="infos_info">Episode: </span>
                        {ele.episodeNum}{" "}
                      </h3>
                    </a>
                  );
                }))
                
              } else {
                return (
                  <a href={e.episodeUrl} rel="noreferrer" target="_blank">
                    <h3 key={e.episodeNum}>
                      <span className="infos_info">
                        {" "}
                        Episode: {e.episodeNum}{" "}
                      </span>
                    </h3>
                  </a>
                );
              }
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default AnimeDetails;
