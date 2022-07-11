import React from 'react';
import {Rings} from 'react-loader-spinner';


export const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <Rings type="Puff" color="#00BFFF" height={550} width={100}/>
    </div>
  )
}
