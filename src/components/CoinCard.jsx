import { API_URL } from "../services/API_URL"

const CoinCard = ({ coin }) => {
  return (
    <div className="coin-card">
        <h4>{coin.symbol}</h4>
        <span>{coin.price}</span>
        <span>{coin.amount}</span>
        <span>{coin.amount * coin.price}</span>
    </div>
  )
}

export default CoinCard