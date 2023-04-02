import React from 'react';
import {useGif} from '../hooks/useGif';
import Spinner from './Spinner';

 
export const RandomMeme = () => {

    const {gif,loading,fetchGif} = useGif();

    <div className='w-1/2  bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>a random gif</h1>
        {
            loading ? (<Spinner/>) : (<img src={gif} alt="" className='w-10/12'/>) 
        }
        <button onClick={ () => fetchGif('')}
         className="bg-white opacity-80 w-10/12 text-lg py-2 rounded-lg mb-[10px]">Generate</button>
    </div>

}

export default RandomMeme;
