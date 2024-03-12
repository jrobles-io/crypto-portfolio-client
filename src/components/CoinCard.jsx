import { API_URL } from "../services/API_URL"
import { useState, useEffect } from "react";
import axios from "axios";

const CoinCard = ({ coin }) => {

    const [logos, setLogos] = useState([]);

    const getAllLogos = () => {
      axios
        .get(`${API_URL}/metaData`)
        .then((response) => setLogos(response.data))
        .catch((error) => console.log(error));
    };
  
    useEffect(() => {
        getAllLogos();
    }, [] );

  return (
    <div className="coin-card">
        <span>
            <img src={logos[coin.id]["logo"]} width='35'/>
            {/* {console.log(logos[coin.id]["logo"])}
            {logos[coin.id]["logo"]} */}
        </span>
        <h4>{coin.symbol}</h4>
        <span>{`$ ${coin.quote.USD.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span>
        <span>{coin.amount}</span>
        <span>{coin.amount * coin.price}</span>
    </div>
  )
}

export default CoinCard