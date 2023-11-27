import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaTwitter, FaFacebook, FaGithub, FaReddit } from "react-icons/fa";
import DOMpurify from "dompurify";
import { useParams } from "react-router-dom";

const CoinPage = () => {
  const [coin, setCoin] = useState({});
  const params = useParams();

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
      console.log(response.data);
    });
  }, [url]);

  return (
    <div className="rounded-div my-6 p-6">
      <div className="flex py-6 items-center px-6">
        <img
          src={coin.image?.large}
          alt="/"
          className="md:w-20 md:h-20 h-12 w-12 mr-8 rounded-full"
        />
        <div>
          <p className="md:text-3xl text-2xl font-bold">{coin.name} price</p>
          <p>({coin.symbol?.toUpperCase()}/USD)</p>
        </div>
      </div>
      <div className="flex justify-between flex-col md:flex-row items-center">
        <div className="md:w-[49%] w-[90%]">
          <p className="md:text-3xl text-2xl font-bold">
            ${coin.market_data?.current_price.usd.toLocaleString()}
          </p>

          <div>
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine
                color={
                  coin.market_data?.price_change_percentage_24h > 0
                    ? "teal"
                    : "red"
                }
              />
            </Sparklines>
          </div>
          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">Market Cap</p>
              <p>${coin.market_data?.market_cap.usd.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-sm">Volume (24h)</p>
              <p>${coin.market_data?.total_volume.usd.toLocaleString()}</p>
            </div>
          </div>
          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm ">24h High</p>
              <p>${coin.market_data?.high_24h.usd.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-sm">24h Low</p>
              <p>${coin.market_data?.low_24h.usd.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="md:w-[49%] w-[90%]">
          <p className="text-xl font-bold">Market Stats</p>
          <div className="flex justify-between py-6">
            <div>
              <p className="text-gray-500 text-sm">Market rank</p>
              <p>{coin.market_data?.market_cap_rank}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm">Hashing Algorithm</p>
              <p>{coin.hashing_algorithm ? coin.hashing_algorithm : "NA"}</p>
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-sm ">Trust Score</p>
              <p>{coin.liquidity_score}</p>
            </div>
          </div>
          <div className="flex justify-between py-6">
            <div>
              <p className="text-gray-500 text-sm">Price change (24h)</p>
              <p>{coin.market_data?.price_change_percentage_24h.toFixed(2)}%</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm">Price change (7d)</p>
              <p>{coin.market_data?.price_change_percentage_7d.toFixed(2)}%</p>
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-sm">Price change (14d)</p>
              <p>{coin.market_data?.price_change_percentage_14d.toFixed(2)}%</p>
            </div>
          </div>
          <div className="flex justify-between py-6">
            <div>
              <p className="text-gray-500 text-sm">Price change (30d)</p>
              <p>{coin.market_data?.price_change_percentage_30d.toFixed(2)}%</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm">Price change (60d)</p>
              <p>{coin.market_data?.price_change_percentage_60d.toFixed(2)}%</p>
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-sm">Price change (1y)</p>
              <p>{coin.market_data?.price_change_percentage_1y.toFixed(2)}%</p>
            </div>
          </div>
          <div className="flex justify-evenly py-6 text-accent">
            <FaTwitter size={20} className="cursor-pointer" />
            <FaFacebook size={20} className="cursor-pointer" />
            <FaReddit size={20} className="cursor-pointer" />
            <FaGithub size={20} className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="md:px-2 px-8">
        <h2 className="text-xl font-bold my-4 ">About {coin.name}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMpurify.sanitize(
              coin.description ? coin.description.en : ""
            ),
          }}
        ></p>
      </div>
    </div>
  );
};

export default CoinPage;
