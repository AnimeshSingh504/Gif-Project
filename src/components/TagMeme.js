import React, { useState } from 'react'
import Spinner from './Spinner';
import { useGif } from '../hooks/useGif';


export const TagMeme = () => {

    const [gifText,setgifText] = useState('car');

    const {gif,loading,fetchGif} = useGif(gifText);
  

    return (
    <div className='w-1/2  bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>a random gif</h1>
        {
            loading ? (<Spinner/>) : (<img src={gif} alt="" className='w-10/12'/>) 
        }
        <input className='w-10/12 text-black bg-white opacity-80 text-lg py-2 rounded-lg text-center font-bold'
            type='text'
            onChange={(event) => setgifText(event.target.value)}
            value={gifText}
        />
        <button onClick={() => fetchGif(gifText)}
         className="bg-white opacity-80 w-10/12 text-lg py-2 rounded-lg mb-[10px]">Generate</button>
    </div>
  )
}

export default TagMeme;