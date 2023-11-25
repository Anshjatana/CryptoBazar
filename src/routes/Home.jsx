import React from 'react'
import CoinSearch from '../components/CoinSearch'
import TrendingTab from '../components/TrendingTab'

const Home = ({coins}) => {
  return (
    <>
      <CoinSearch coins={coins}/>
      <TrendingTab/>
    </>
  )
}

export default Home
