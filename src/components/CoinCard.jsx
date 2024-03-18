import { useEffect } from "react"


const CoinCard = ({ coin, logos , bg}) => {
   
    const coinUsdPrice = coin && coin.quote.USD.price >= 0.01 
    ? coin.quote.USD.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : coin.quote.USD.price.toFixed(7).toString()

    const formatMarketCap = (marketCap) => {
      if (marketCap >= 1e12) { // Trillion
        return `${(marketCap / 1e12).toFixed(1)}T`;
      } else if (marketCap >= 1e9) { // Billion
        return `${(marketCap / 1e9).toFixed(1)}B`;
      } else if (marketCap >= 1e6) { // Million
        return `${(marketCap / 1e6).toFixed(1)}M`;
      } else {
        return `${marketCap.toFixed(1)}`;
      }
    };
    
    const coinMarketCap = coin ? formatMarketCap(coin.quote.USD.market_cap) : '0';

    useEffect(()=> {
        console.log(bg)
    },[bg])

  return (
    <>

    {
      coin && 
        <div className={`coin-card ${bg}`}>
            <span>
                {logos && <img src={logos[coin.id]["logo"]} width='35'/>}
                {/* {console.log(logos[coin.id]["logo"])}
                {logos[coin.id]["logo"]} */}
            </span>
            <h4>{coin.symbol}</h4>
            <span>{`$ ${coinUsdPrice}`}</span>
            <span>{`$ ${coinMarketCap}`}</span>
        </div>
    }
    
    
    </>
  )
}

export default CoinCard