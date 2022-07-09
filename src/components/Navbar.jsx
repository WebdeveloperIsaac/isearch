import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from "./Search";
export const Navbar  = ({darkTheme,setDarkTheme}) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm-justify-between item-center border-b dark:border-gray-700 border-gray-200'>
        <div className='flex justify-between items-center space-x-5 w-screen'>
            <Link to="/">
              <p className='text-2xl bg-green-300 font-bold text-white p-y-1 p-x-2 rounded dark:bg-blue-500 text-gray-900'>
                  I-search 🔎
              </p>
            </Link>
            <button type='button' onClick ={() => { setDarkTheme(!darkTheme)}} className="text-xl dark:bg-gray-50 dark:text-gray-900  dark:bg-black dark:text-white bg-white border rounded-full px-4 py-1  hover:shadow-lg">
              {darkTheme? 'Light 💡' : 'Dark 🌙'}
            </button>
        </div>
        <Search />
    </div>
  )
}
