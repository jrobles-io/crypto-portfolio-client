import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../services/API_URL";
import SearchBar from "../components/SearchBar";
import CoinCard from "../components/CoinCard";

const AddCoin = () => {
  const [coins, setCoins] = useState([]);

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
    <div className="coin-selection">
      <SearchBar />
      {/* <CoinCard coin={1}/> */}
      {coins &&
        coins.map((coin) => {
          return <CoinCard coin={coin} key={coin.id} />;
        })}
    </div>
  );
};

export default AddCoin;
