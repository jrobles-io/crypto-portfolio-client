import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { API_URL } from "../services/API_URL";


const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

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

  const fetchData = (value) => {
    axios
      .get(`${API_URL}/coins`)
    //   .then((response) => setCoins(response.data))
      .then((coins) => {
        console.log(coins.data)
        const results = coins.data.filter((coin) => {
          return (
            value &&
            coin &&
            coin.symbol &&
            coin.symbol.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};


export default SearchBar