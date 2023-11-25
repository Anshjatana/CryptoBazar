import React, {useState,useEffect} from 'react'
import axios from 'axios'

const TrendingTab = () => {
    const [trending,setTrending] = useState([])
    const url = "https://api.coingecko.com/api/v3/search/trending"
    useEffect(() => {
        axios.get(url).then((response) =>{
            setTrending(response.data.coins)
            console.log(response.data.coins);
        }
       )
        
    },[url])
  return (
    <div className='rounded-div  my-12 py-8 text-primary'>
     <h1 className=' text-2xl font-bold py-4 text-center'>
        Trending coins
     </h1>
     <div className='flex md:flex-wrap md:flex-row flex-col  items-center justify-between'>

     {
        trending.map((coin)=>(
            <div className='shadow-xl rounded-xl md:w-[47%] lg:w-[32%] w-[90%]  p-4 hover:scale-105 ease-in-out duration-300 '>
            <div className='flex justify-between items-center '>
                <div className='flex '>
                    <img src={coin.item.small} alt="/" className='rounded-3xl w-10'/>
                    <div className='ml-4 text-sm '>
                        <p>{coin.item.name}</p>
                        <p>{coin.item.symbol.toUpperCase()}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" className='w-4 mr-2' alt="btcn" />
                    <p>{coin.item.price_btc.toFixed(7)}</p>
                </div>
            </div>
            </div>
        ))
     }
     </div>
    </div>
  )
}

export default TrendingTab
