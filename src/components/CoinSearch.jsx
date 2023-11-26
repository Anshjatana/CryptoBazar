import React, { useState } from 'react'

import CoinItem from './CoinItem';

const CoinSearch = ({coins}) => {
    const[searchText ,setSearchText] = useState("")
  return (
    <div className='rounded-div mt-2 pb-4'>
    <div className='flex flex-col md:flex-row items-center justify-around  my-4 px-10 py-4'>
        <h1 className='text-2xl font-bold '>Search Crypto</h1>
      <div className='flex flex-col items-center justify-center'>
        <form className='w-full max-w-md'> 
            <input
              className='w-full px-4 py-1 my-2 text-center  text-black bg-gray-100  rounded-md shadow-md'
              type='text'
              placeholder='Search a coin'
              onChange={(e)=> setSearchText(e.target.value)}
            />
        </form>
      </div>
    </div>
        <table className='w-full border-collapse text-center'>
            <thead >
                <tr className='border-b text-sm md:text-lg'>
                    <th></th>
                    <th className='px-4'>#</th>
                    <th className='text-left  w-[50px] sm:w-[180px]'>Coin</th>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>24h</th>
                    <th className='hidden lg:table-cell'>24h Volume</th>
                    <th className='hidden md:table-cell'>Market</th>
                    <th>Last 7 days</th>
                </tr>
            </thead>
            <tbody>
            {coins.filter((value)=>{
                if(searchText === ""){
                    return true;
                }
                else{
                    return value.name.toLowerCase().includes(searchText.toLowerCase())
                }
             }).map((coin)=>(<CoinItem key={coin.id} coin={coin}/>))
             }
            </tbody>
        </table>
    </div>
  )
}

export default CoinSearch
