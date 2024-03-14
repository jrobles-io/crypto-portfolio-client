import { useState, useEffect, useContext } from "react";
import { PortfolioContext } from "../contexts/portfolios.context";
import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import CoinCard from "../components/CoinCard";

const CoinUpdate = ({ setPortfolio, portfolio }) => {

    
    let [ sortedCoins, setSortedCoins ] = useState([])
    let [ ownedCoins, setOwnedCoins ] = useState([])
    const [logos, setLogos] = useState(null);
    
    const { metaData, coins, portfolios } = useContext(PortfolioContext)
    const { portfolioId } = useParams()


  const getTheseCoins = () => {

    let thisPortFolio = portfolios.find((portfolio) => portfolio.id == portfolioId)
    let ourCoins = [...thisPortFolio.coinIds]
    let theseCoins = coins.filter((coin) => ourCoins.includes(coin.id))
    let otherCoins = coins.filter((coin) => !ourCoins.includes(coin.id))

    setOwnedCoins(ourCoins)

    setSortedCoins([...theseCoins, ...otherCoins])

    console.log("these are our coins ===>", [...theseCoins, ...otherCoins])
  };

  const coinClick = (coinId) => {

    if (ownedCoins.includes(coinId)) {

        let nowCoins = [...ownedCoins, coinId].filter((coin) => coin != coinId)
        setOwnedCoins(nowCoins)

    } else {

        let nowCoins = [...ownedCoins, coinId]
        setOwnedCoins(nowCoins)
    }

    setPortfolio((prev) => prev.coinIds.includes(coinId) ? ({
        ...prev,
        coinIds: prev.coinIds.filter(coin => coin != coinId),
      })
      :
      ({
          ...prev,
          coinIds: [...prev.coinIds, coinId],
        }) 
      )



  }

  useEffect(() => {
    if (coins && metaData) {

        setLogos(metaData)

        getTheseCoins();
    }
  }, [portfolios, metaData, coins]);

  return (
    coins && (
      <div className="coin-selection">
        {/* <CoinCard coin={1}/> */}
        <SearchBar setCoins={setSortedCoins} coins={coins} />
        {sortedCoins.length > 0 && sortedCoins.map((coin) => {
          return (
            <div
              onClick={() => coinClick(coin.id)}
            >
              <CoinCard coin={coin} key={coin.id} logos={logos} bg={ownedCoins.includes(coin.id) ? "green" : "white" } />
            </div>
          );
        })}
      </div>
    )
  );
};

export default CoinUpdate;