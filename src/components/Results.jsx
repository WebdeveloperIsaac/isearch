import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import {ReactPlayer} from 'react-player'
import { Loading } from './Loading'


import { useResultContext } from '../contexts/ResultContextProvider'

export const Results = () => {
  const {results,isLoading,getResults,searchTerm} = useResultContext();
  const location = useLocation();//images or any stuff that

  useEffect(() => {
    getResults('/search/q=javascript+mastery');
  }, [])

  if(isLoading) return <Loading />

  console.log(location.pathname)
  switch (location.pathname){
    case '/search':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
            {results?.results?.map(({link,title},index)=> (
              <div key={index} className="md:2/5 w-full">
                  <a href={link} target="_blank" rel="noreferrer">
                    <p className='text-sm'>
                      {link.length > 30? link.substring(0,30) :link}
                    </p>
                    <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                      {title}
                    </p>
                  </a>
              </div>
            ))}
        </div>
      );
    case '/images':
      return 'IMAGES';
    case '/news':
      return 'NEWS';
    case '/Videos':
      return 'Videos';
    default:
      return 'Error';
  }
}
