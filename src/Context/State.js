import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Context from './Context'
const State = (props) => {
    // ? useState hook to store the anime data
    const [Animes, setAnimes] = useState([]);
    const [type, settype] = useState("popular");
    const [TopAnimes, setTopAnimes] = useState([]);
    const [loading, setloading] = useState(true);
    let [page, setPage] = useState(2);
    const [geners, setgeners] = useState("action");
    const [searchResult, setsearchResult] = useState([]);
    // ? Function to fetch Popular anime
    const popular = (page) => {
        setPage(2);
        setloading(true);
        settype("popular");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5154136085msh01c144c95ca355dp130597jsncc2599e99240',
                'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
            }
        };

        fetch(`https://gogoanime2.p.rapidapi.com/popular?page=${page}`, options)
            .then(response => response.json())
            .then(response => {
                setAnimes(response.slice(5));
                setloading(false);
                setTopAnimes(response.slice(0, 5));
            })
            .catch(err => {
                setloading(false);
            });
    }
    // ? Function to fetch recently added episode
    const RecentEp = () => {
        setPage(2);
        setloading(true);
        settype("recently added")
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5154136085msh01c144c95ca355dp130597jsncc2599e99240',
                'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
            }
        };

        fetch(`https://gogoanime2.p.rapidapi.com/recent-release?type=1&page=1`, options)
            .then(response => response.json())
            .then(response => {
                setloading(false);
                setAnimes(response.slice(5));
                setTopAnimes(response.slice(0, 5));
            })
            .catch(err => {
                setloading(false);
            });
    }
    // ? Function to search by geners
    const Geners = () => {
        setPage(2);
        setloading(true);
        settype(geners);
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5154136085msh01c144c95ca355dp130597jsncc2599e99240',
                'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
            }
        };

        fetch(`https://gogoanime2.p.rapidapi.com/genre/${geners}?page=1`, options)
            .then(response => response.json())
            .then(response => {
                setloading(false);
                setAnimes(response.slice(5));
                setTopAnimes(response.slice(0, 5));
            })
            .catch(err => {
                setloading(false);
            });
    }
    useEffect(() => {
        popular(1);
    }, [])
    return (
        <Context.Provider value={{ Animes, type, setAnimes, settype, popular, TopAnimes, setTopAnimes, loading, setloading, RecentEp, page, setPage, Geners, setgeners, searchResult, setsearchResult }}>
            {props.children}
        </Context.Provider>
    )
}

export default State