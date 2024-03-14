import { createContext, useState, useEffect } from "react";
import { API_URL } from "../services/API_URL";
import axios from "axios";

const PortfolioContext = createContext();

const PortfoliosProvider = ({ children }) => {
  const [ portfolios, setPortfolios ] = useState([]);
  const [ coins, setCoins] = useState([])
  const [ metaData, setMetaData ] = useState(null)
//   const [fetching, setFetching] = useState(true);

  const getAllCoins = () => {
    axios
    .get(`${API_URL}/coins`)
    .then((response) => setCoins(response.data))
    .catch((error) => console.log(error));
  }

  const getMetaData = () => {
    axios
    .get(`${API_URL}/metaData`)
    .then((response) => setMetaData(response.data))
    .catch((error) => console.log(error));
  }

  const getAllPortfolios = () => {
    console.log("Getting portfolios...")
    axios
      .get(`${API_URL}/portfolios`)
      .then((response) => {
        console.log(response.data);
        setPortfolios(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllPortfolios();
    getAllCoins()
    getMetaData()
  }, []);

  return (
    <PortfolioContext.Provider value={{ portfolios, setPortfolios, getAllPortfolios, coins, metaData }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioContext, PortfoliosProvider };
