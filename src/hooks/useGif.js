import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY; 
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export const useGif  = (gifText) => {

    const [gif,setGif] = useState('');
    const [loading,setLoading] = useState(false);

  
    async function fetchGif(gifText){
        setLoading(true);
        const using_url = (gifText=='' ? (url) : `${url}&tag=${gifText}`);
        const {data} = await axios.get(using_url);
        const gifSource = data.data.images.downsized_large.url;
        setGif(gifSource);
        setLoading(false);
    }

    useEffect( () => {
        fetchGif('car');
    },[])

    return{gif,loading,fetchGif};

}

export default useGif;