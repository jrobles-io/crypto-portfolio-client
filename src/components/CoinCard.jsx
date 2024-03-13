import { useEffect } from "react"


const CoinCard = ({ coin, logos , bg}) => {
   
    const coinUsdPrice = coin.quote.USD.price >= 0.01 
    ? coin.quote.USD.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : coin.quote.USD.price.toFixed(7).toString()

    useEffect(()=> {
        console.log(bg)
    },[bg])

  return (
    <div className={`coin-card ${bg}`}>
        <span>
            {logos && <img src={logos[coin.id]["logo"]} width='35'/>}
            {/* {console.log(logos[coin.id]["logo"])}
            {logos[coin.id]["logo"]} */}
        </span>
        <h4>{coin.symbol}</h4>
        <span>{`$ ${coinUsdPrice}`}</span>
        <span>{coin.amount}</span>
        <span>{coin.amount * coin.price}</span>
    </div>
  )
}

export default CoinCard