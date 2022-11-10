import React from "react";
import { useContext } from "react";
import { useState } from "react";
import Context from "../Context/Context";
import { useNavigate } from "react-router-dom";
import "../Style/Navbar.css";
import { useEffect } from "react";
const Navbar = () => {
  const [display, setdisplay] = useState("categories");
  const c = useContext(Context);
  const {
    popular,
    RecentEp,
    settype,
    Geners,
    setgeners,
    setsearchResult,
    setloading,
  } = c;
  const [key, setkey] = useState("");
  const navigate = useNavigate();
  const Search = () => {
    setloading(true);
    navigate(`/anime/search`);
    settype(key);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5154136085msh01c144c95ca355dp130597jsncc2599e99240",
        "X-RapidAPI-Host": "gogoanime2.p.rapidapi.com",
      },
    };

    fetch(
      `https://gogoanime2.p.rapidapi.com/search?keyw=${key}&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setsearchResult(response);
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
      });
  };
  useEffect(() => {
    document.getElementById("search_box").addEventListener("keypress", (e) => {
      if (e.key === "Enter" && key) {
        Search();
        setkey("");
      }
    });
  }, [key]);
  return (
    <>
      <div className="main_nav_container">
        <div className="brand_name">
          <h1>Mr.Anime</h1>
        </div>
        <div className="home">
          <p
            onClick={() => {
              popular(1);
              settype("popular");
              navigate("/");
            }}
          >
            Popular
          </p>
          <p
            onClick={() => {
              RecentEp();
              settype("recently added");
              navigate("/");
            }}
          >
            Recently Added
          </p>
          <p
            id="main_category"
            onClick={() => {
              setdisplay("categories_display");
              if (display === "categories_display") {
                setdisplay("categories");
              }
              navigate("/");
            }}
          >
            Geners{" "}
            <span id={display}>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("action");
                }}
              >
                Action
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("adventure");
                }}
              >
                Adventure
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("comedy");
                }}
              >
                Comedy
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("romance");
                }}
              >
                Romance
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("horror");
                }}
              >
                Horror
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("mystery");
                }}
              >
                Mystery
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("ecchi");
                }}
              >
                Ecchi
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("drama");
                }}
              >
                Drama
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("fantasy");
                }}
              >
                Fantasy
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("isekai");
                }}
              >
                Isekai
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("harem");
                }}
              >
                Harem
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("medical");
                }}
              >
                Medical
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("martial-arts");
                }}
              >
                Martial Arts
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("parody");
                }}
              >
                Parody
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("school");
                }}
              >
                School
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("slice-of-life");
                }}
              >
                Slice of Life
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("superhero");
                }}
              >
                SuperHero
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("thriller");
                }}
              >
                Thriller
              </li>
            </span>
          </p>
        </div>
        <div className="search">
          <input
            type="text"
            value={key}
            onChange={(e) => {
              setkey(e.target.value);
            }}
            id="search_box"
          />
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={() => {
              Search();
            }}
          ></i>
        </div>
      </div>
      <div className="for_phones_nav">
      <div className="home_for_phone">
          <p
            onClick={() => {
              popular(1);
              settype("popular");
              navigate("/");
            }}
          >
            Popular
          </p>
          <p
            onClick={() => {
              RecentEp();
              settype("recently added");
              navigate("/");
            }}
          >
            Recently Added
          </p>
          <p
            id="main_category"
            onClick={() => {
              setdisplay("categories_display");
              if (display === "categories_display") {
                setdisplay("categories");
              }
              navigate("/");
            }}
          >
            Geners{" "}
            <span id={display}>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("action");
                }}
              >
                Action
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("adventure");
                }}
              >
                Adventure
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("comedy");
                }}
              >
                Comedy
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("romance");
                }}
              >
                Romance
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("horror");
                }}
              >
                Horror
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("mystery");
                }}
              >
                Mystery
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("ecchi");
                }}
              >
                Ecchi
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("drama");
                }}
              >
                Drama
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("fantasy");
                }}
              >
                Fantasy
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("isekai");
                }}
              >
                Isekai
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("harem");
                }}
              >
                Harem
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("medical");
                }}
              >
                Medical
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("martial-arts");
                }}
              >
                Martial Arts
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("parody");
                }}
              >
                Parody
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("school");
                }}
              >
                School
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("slice-of-life");
                }}
              >
                Slice of Life
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("superhero");
                }}
              >
                SuperHero
              </li>
              <li
                onClick={(e) => {
                  Geners();
                  settype(e.target.innerHTML);
                  setgeners("thriller");
                }}
              >
                Thriller
              </li>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
