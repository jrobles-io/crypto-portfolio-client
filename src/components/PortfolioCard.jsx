import CoinCard from "./CoinCard"
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../services/API_URL";


const PortfolioCard = ({portfolio}) => {

  const [coins, setCoins] = useState([]);

  const getAllCoins = () => {
    axios
      .get(`${API_URL}/coins`)
      .then((response) => setCoins(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCoins();
  }, [] );

  return (
    <div className="portfolio-card">
      <h3>{portfolio.title}</h3>
      <div className='titles-container'>
        <span>Logo</span>
        <span>Symbol</span>
        <span>Price</span>
        <span>USD Value</span>
      </div>
      {coins && 
        coins.map((coin) => {
          return portfolio.coinIds.map((coinId)=>{
            if (coin.id === coinId) {
              // console.log(coin.id, coinId, coin)
              return <CoinCard coin={coin} key={coin.id} />;
            }
          })
        })
      }
    </div>
  )
}

export default PortfolioCard
