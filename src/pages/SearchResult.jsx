import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context/Context";
import "../Style/SearchResult.css";
import AnimeCard from "./AnimeCard";
import Loading from "./Loading";
const SearchResult = () => {
  const c = useContext(Context);
  const navigate = useNavigate()
  const { searchResult, loading, type } = c;
  const navigate_to =(id)=>{
    navigate(`/anime/${id}`);
  }
  return (
    <>
      <div className="main_search_result">
        <div className="no_of_result">
            <h1>{searchResult.length} Results - {type}</h1>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="search_results">
            {searchResult.length >= 1 ? (
              searchResult.map((e) => {
                return (
                  <AnimeCard
                    key={e.animeId}
                    image={e.animeImg}
                    name={e.animeTitle}
                    searchRelease={e.status}
                    detail_page={()=>{navigate_to(e.animeId)}}
                  />
                );
              })
            ) : (
              <h1 style={{ textAlign: "center" }}>
                <i className="fa-regular fa-face-sad-tear"></i> No Anime Found
              </h1>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchResult;
