import CoinCard from "./CoinCard"
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../services/API_URL";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";


const PortfolioCard = ({portfolio}) => {

  const [coins, setCoins] = useState([]);

  const getAllCoins = () => {
    axios
      .get(`${API_URL}/coins`)
      .then((response) => setCoins(response.data))
      .catch((error) => console.log(error));
  };

  const [logos, setLogos] = useState(null);

  const getAllLogos = () => {
    axios
      .get(`${API_URL}/metaData`)
      .then((response) => setLogos(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCoins();
    getAllLogos();
  }, [] );

  const handleDelete = () => {
    axios
    .delete(`${API_URL}/portfolios/${portfolio.id}`)
  }

  return (
    <div className="portfolio-card">
      <div className='portfolio-card-header'>
      <h3>{portfolio.title}</h3>
      <Link to={`portfolio/${portfolio.id}`}>
        <FaEdit id='edit-icon'/>
      </Link>
      <div onClick={() => {handleDelete()}}><RiDeleteBin6Line id='delete-icon'/></div>
      </div>

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
              return <CoinCard coin={coin} key={coin.id} logos={logos}/>;
            }
          })
        })
      }
    </div>
  )
}

export default PortfolioCard
