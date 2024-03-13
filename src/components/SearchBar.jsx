import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setResults, setCoins, coins }) => {
  const [input, setInput] = useState("");
  const [coinsBackup, setCoinsBackup] = useState(coins);


  useEffect(() => {
  
    const filtered = coinsBackup.filter((coin ) =>  String(coin.symbol.toLowerCase()).includes(
                String(input.toLowerCase())
              ) 
              ||
               String(coin.name.toLowerCase()).includes(input.toLowerCase()))

               input ?
       setCoins(filtered) : setCoins(coinsBackup)
      
  }, [input]);

  const handleChange = (value) => {
    setInput(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        className="search-input"
        placeholder="Type to search..."
        type="text"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
