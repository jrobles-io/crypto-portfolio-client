import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../services/API_URL";
import SearchBar from "../components/SearchBar";
import CoinCard from "../components/CoinCard";

const AddCoin = ({ setPortfolio, portfolio }) => {
  const [coins, setCoins] = useState(null);

  const [logos, setLogos] = useState(null);

  const getAllLogos = () => {
    axios
      .get(`${API_URL}/metaData`)
      .then((response) => setLogos(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllLogos();
  }, []);

  const getAllCoins = () => {
    axios
      .get(`${API_URL}/coins`)
      .then((response) => setCoins(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCoins();
  }, []);

  return (
    coins && (
      <div className="coin-selection">
        {/* <CoinCard coin={1}/> */}
        <SearchBar setCoins={setCoins} coins={coins} />
        {coins.map((coin) => {
          return (
            <div
              onClick={() =>
                setPortfolio((prev) => prev.coinIds.includes(coin.id) ? ({
                  ...prev,
                  coinIds: prev.coinIds.filter(coinId => coinId !== coin.id),
                })
                :
                ({
                    ...prev,
                    coinIds: [...prev.coinIds, coin.id],
                  }) 
                
                )
              }
            >
              <CoinCard coin={coin} key={coin.id} logos={logos} bg={portfolio.coinIds.includes(coin.id) ? "green" : "white" } />
            </div>
          );
        })}
      </div>
    )
  );
};

export default AddCoin;
